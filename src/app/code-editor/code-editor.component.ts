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

  ngAfterViewInit(): void {
    ace.config.set("fontSize", "14px");
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');

    const aceEditor = ace.edit(this.editor.nativeElement);
    aceEditor.setTheme("ace/theme/twilight");
    
    aceEditor.session.setValue(
      JSON.stringify(this.demoService.configcheckoutObject,null,'\t')
    );
 

    aceEditor.getSession().setMode("ace/mode/javascript");
    aceEditor.getSession().setTabSize(2);
    aceEditor.getSession().setUseWrapMode(true);
    aceEditor.on("blur", () => {
     // console.log(aceEditor.getValue());
      
      //this.demoService.updateTheConfigJson( JSON.parse(aceEditor.getValue()));
    });

    aceEditor.commands.on('afterExec', eventData => {
      if (eventData.command.name === 'insertstring') {
        

        console.log(aceEditor.getValue());
        
        if (this.IsJsonString(aceEditor.getValue()) == true){
        this.demoService.updateTheConfigJson( JSON.parse(aceEditor.getValue()));
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
}
