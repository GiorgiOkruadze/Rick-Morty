import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { ShowAllComponent } from './views/show-all/show-all.component';
import { HeaderNavComponent } from './navigations/header-nav/header-nav.component';
import { SliderComponent } from './view-helpers/slider/slider.component';
import { CardComponent } from './view-helpers/card/card.component';
import { WebClientService } from 'src/shared-services/proxy-services/web-client.service';
import { FilterComponent } from './view-helpers/filter/filter.component';
import { FontDirective } from './directives/font.directive';
import { LoadingInterceptorService } from  './../shared-services/Interseprot/loading-interceptor.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ShowAllComponent,
    HeaderNavComponent,
    SliderComponent,
    CardComponent,
    FilterComponent,
    FontDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptorService,
      multi: true
    },
    WebClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
