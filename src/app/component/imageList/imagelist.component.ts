import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../service/image.service';

@Component({
  selector: 'image-list',
  templateUrl: './imagelist.component.html'
})
export class ImageListComponent  implements OnInit{
  imagesWords = []
  imageist = [];
  constructor(
    private imageService: ImageService,
  ) {
  }

  ngOnInit(): void {
    
    this.imageService.getAllWords()
    .then((response:any)=>{
      this.imagesWords = JSON.parse(response._body).words;
    })
    .catch(err=>{
      console.log(err)
    })
  }
  onClick(word){
    this.imageist = [];
    this.imageService.getImage(word)
    .then((response:any)=>{
      this.imageist = JSON.parse(response._body).images;
    })
    .catch(err=>{
      console.log(err);
    })
  }
}
