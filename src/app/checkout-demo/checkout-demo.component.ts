import { ChangeDetectorRef, Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { debounceTime } from 'rxjs/operators';
import { DemoServiceService } from './service/demo-service.service';


@Component({
  selector: 'app-checkout-demo',
  templateUrl: './checkout-demo.component.html',
  styleUrls: ['./checkout-demo.component.css']
})

export class CheckoutDemoComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer,
    private s:DemoServiceService,
    private changeRef : ChangeDetectorRef) { }
  url="";
  loading = false;
  ngOnInit(): void {

    this.s.getValue().pipe(debounceTime(3000)).subscribe((value) => {
      this.url = value;
    });
  }



}


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 
