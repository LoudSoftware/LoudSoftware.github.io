import { Component, Renderer2 } from '@angular/core';

const grayscaleScript:string = "/assets/js/grayscale.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  private loadGrayscale: Promise<any>;

  constructor(private renderer:Renderer2){

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.renderer.setAttribute(document.querySelector('body'),"id","page-top");

    //load the grayscale.js after everything else is loaded
    this.loadGrayscale = new Promise((resolve) => {
      console.log('resolving promise...');
      this.loadScript();
    });
  }

  private loadScript(): void {
    console.log('load grayscale script ...');
    let node = document.createElement('script');
    node.src = grayscaleScript;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
