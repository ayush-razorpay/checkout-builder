import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';
import * as ace from "ace-builds";
import { DemoServiceService } from '../checkout-demo/service/demo-service.service';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent implements OnInit {

  constructor(private demoService : DemoServiceService) { }
  ngOnInit(): void {
    
  }

  @ViewChild("editor") private editor: ElementRef<HTMLElement>;

  toPatch = {};
  aceEditor ;
  ngAfterViewInit(): void {
    ace.config.set("fontSize", "14px");
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');

    //const 
    this.aceEditor = ace.edit(this.editor.nativeElement);
    this.aceEditor.setTheme("ace/theme/twilight"); 

    let var1 = this.demoService.getconfigcheckoutConfig();
    this.toPatch = {
      "tnxType": var1.tnxType,
      "tnx_id": var1.tnx_id,
      "enableTimeout" : var1.enableTimeout
    }

    delete var1['tnxType'];
    delete var1['tnx_id'];
    delete var1['enableTimeout'];

    this.aceEditor.session.setValue(
      JSON.stringify(this.demoService.getconfigcheckoutConfig(),null,'\t')
    );
 

    this.aceEditor.getSession().setMode("ace/mode/javascript");
    this.aceEditor.getSession().setTabSize(2);
    this.aceEditor.getSession().setUseWrapMode(true);
    this.aceEditor.on("blur", () => {
    });

    this.aceEditor.commands.on('afterExec', eventData => {
      if (eventData.command.name === 'insertstring') {
        console.log(this.aceEditor.getValue());
        
        if (this.IsJsonString(this.aceEditor.getValue()) == true){

          let toSet ={...this.toPatch,  ...JSON.parse(this.aceEditor.getValue()) };
       this.demoService.replaceFullConfigJson(toSet);
        }
      }
  });
  }

  private IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

copy(){

  const el = document.createElement('textarea');
  el.value = this.aceEditor.getValue();
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

}
}
