import { Component, Renderer2, AfterViewInit } from '@angular/core';
const grayscaleScript = './assets/js/grayscale.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  private loadGrayscale: Promise<any>;
  private loaded: boolean;

  constructor(private renderer: Renderer2) {

  }

  ngAfterViewInit(): void {

    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    this.renderer.setAttribute(document.querySelector('body'), 'id', 'page-top');

    // load the grayscale.js after everything else is loaded
    this.loadGrayscale = new Promise((resolve) => {
      console.log('resolving promise...');
      this.loadScript();
    });
  }

  private loadScript(): void {
    console.log('load grayscale script ...');
    const node = document.createElement('script');
    node.src = grayscaleScript;
    node.type = 'text/javascript';
    node.async = true;
    // node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
