import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CardComponent } from './card/card.component';

import { ImageService } from './shared/services/image-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    GalleryComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
