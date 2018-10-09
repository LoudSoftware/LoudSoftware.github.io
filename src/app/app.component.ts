import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { environment } from '../environments/environment';
import { Component, Renderer2, AfterViewInit, OnInit, Inject, PLATFORM_ID } from '@angular/core';
const grayscaleScript = './assets/js/grayscale.js';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private loadGrayscale: Promise<any>;
    private loaded: boolean;

    public ngOnInit(): void {
        if (!isPlatformBrowser(this.platformId)) {
            let bases = this.document.getElementsByTagName('base');

            if (bases.length > 0) {
                bases[0].setAttribute('href', environment.baseHref);
            }
        }
    }


    constructor(@Inject(PLATFORM_ID) private platformId: any, @Inject(DOCUMENT) private document: any, private renderer: Renderer2) {

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
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    }
}
