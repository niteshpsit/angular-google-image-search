import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule }     from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddImageComponent }      from './component/addImage/addimage.component';
import { ImageListComponent }      from './component/imageList/imagelist.component';

import { ImageService } from './service/image.service';

@NgModule({
  declarations: [
    AppComponent,
    AddImageComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
