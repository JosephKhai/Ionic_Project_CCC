
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';
import { ActionSheetController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'page-speaker-detail',
  templateUrl: 'speaker-detail.html',
  styleUrls: ['./speaker-detail.scss'],
})
export class SpeakerDetailPage {
  books: any;
  chapters: any;

  constructor(
    private page: Router,
    private dataProvider: ConferenceData,
    private route: ActivatedRoute,
    public actionSheetCtrl: ActionSheetController,
    public confData: ConferenceData,
    public inAppBrowser: InAppBrowser,
  ) {}

  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      const bookId = this.route.snapshot.paramMap.get('bookId');
      const chaptersID = this.route.snapshot.paramMap.get('chapterId');
      if (data && data.books) {
        for (const book of data.books) {

          for(const chapter of book.chapters){

            //console.log(chapter.title)
            this.chapters = chapter;

            if (book && book.id === bookId) {
              this.books = book;
              break;
            }
          }

        }
      }
    });
  }


}
