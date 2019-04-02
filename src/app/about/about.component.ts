import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title }     from '@angular/platform-browser';
import { Page }      from '../shared/page';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  page: Page;

  constructor(private route: ActivatedRoute,
    private titleService: Title) { }

  ngOnInit() {
    this.setTitle('About Me');
  }

  public setTitle( newTitle: string) {
    let finalTitle = 'Nate LaClaire';
    if (newTitle!='Home') {
      finalTitle = `${newTitle} - ${finalTitle}`;
    }
    this.titleService.setTitle( finalTitle );
  }

}
