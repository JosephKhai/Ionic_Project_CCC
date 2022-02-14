import { NgModule } from '@angular/core';
import { ChapterDetailPage } from './chapter-details';
import { ChapterDetailPageRoutingModule } from './chapter-detail-routing.module';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ChapterDetailPageRoutingModule
  ],
  declarations: [
    ChapterDetailPage
  ]
})

export class ChapterDetailModule {}
