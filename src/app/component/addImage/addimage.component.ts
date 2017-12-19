import { Component } from '@angular/core';
import { ImageService } from '../../service/image.service';

@Component({
  selector: 'add-image',
  templateUrl: './addimage.component.html'
})
export class AddImageComponent {

  searchword: string;
  constructor(
    private imageService: ImageService,
  ) {
  }
  searchAndStoreImages(evt) {
    this.imageService.addImage(this.searchword)
    .then(result =>{
      this.searchword = "";
    })
    .catch(err=>{
      console.log("err",err);
    })

  }

}
