import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  positions: Observable<any[]>;

  constructor(private titleService: Title, db: AngularFirestore) { 
    this.positions = db.collection('positions', 
        ref => ref.orderBy('order', 'asc')
      ).valueChanges();
  }

  ngOnInit() {
    this.setTitle('Home');
  }

  public setTitle( newTitle: string) {
    let finalTitle = 'Nate LaClaire';
    if (newTitle!='Home') {
      finalTitle = `${newTitle} - ${finalTitle}`;
    }
    this.titleService.setTitle( finalTitle );
  }

}
