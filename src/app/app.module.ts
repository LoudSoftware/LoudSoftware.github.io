import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule} from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResumeComponent } from './components/resume/resume.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavigationComponent,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    ResumeComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
