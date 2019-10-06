import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SkybarComponent } from './skybar/skybar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { PageContentComponent } from './page-content/page-content.component';

import { HomeComponent } from './pages/home/home.component';
import { RpiaAboutComponent } from './pages/rpia-about/rpia-about.component';
import { FaqComponent } from './pages/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    SkybarComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    PageContentComponent,
    
    HomeComponent,
    RpiaAboutComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
