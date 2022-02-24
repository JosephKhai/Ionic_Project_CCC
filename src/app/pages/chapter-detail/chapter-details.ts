import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { ConferenceData } from "../../providers/conference-data";

@Component({
  selector: 'page-chapter-detail',
  templateUrl: 'chapter-detail.html',
  styleUrls: ['./chapter-detail.scss'],

})

export class ChapterDetailPage {

  @Input() book: any;

  constructor(
    private dataProvider: ConferenceData,
    private route: ActivatedRoute,
  ){}

  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      const bookId = this.route.snapshot.paramMap.get('bookId');

      if (data && data.books) {
        for (const book of data.books) {

            if (book && book.id === bookId) {
              this.book = book;
              break;
            }
        }
      }
    });
  }


}
