import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service'

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage {

  constructor(public photoService : PhotoService) { }

  addPhotoToGallery(){
    this.photoService.addNewToGallery();
  }

}
