import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddImageComponent }      from './component/addImage/addimage.component';
import { ImageListComponent }      from './component/imageList/imagelist.component';

const routes: Routes = [
    { path: '', redirectTo: '/add', pathMatch: 'full' },
    { path: 'add', component: AddImageComponent },
    { path: 'list', component: ImageListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}