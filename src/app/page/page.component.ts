import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/services/content.service';
import { ActivatedRoute } from '@angular/router';
import { Title }     from '@angular/platform-browser';
import { Page }      from '../shared/page';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  page: Page;

  constructor(private route: ActivatedRoute,
    private contentService: ContentService,
    private titleService: Title) { }

  ngOnInit() {
    const pageData = this.route.snapshot.data['page'];
    this.page = this.contentService.pages[pageData];
    this.setTitle(this.contentService.pages[pageData].title);
  }

  public setTitle( newTitle: string) {
    let finalTitle = 'Nate LaClaire';
    if (newTitle!='Home') {
      finalTitle = `${newTitle} - ${finalTitle}`;
    }
    this.titleService.setTitle( finalTitle );
  }

}
