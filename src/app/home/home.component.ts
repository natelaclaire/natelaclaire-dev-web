import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  photos: Observable<any[]>;
  moods: Observable<any[]>;
  commits: Observable<any[]>;

  refresherInterval = null;

  constructor(private titleService: Title,
    db: AngularFirestore) { 
      this.photos = db.collection('photos', 
        ref => ref.orderBy('posted', 'desc').limit(10)
      ).valueChanges();
      this.moods = db.collection('moods', 
        ref => ref.orderBy('time', 'desc').limit(1)
      ).valueChanges();
      this.commits = db.collection('gitCommits', 
        ref => ref.orderBy('timestamp', 'desc').limit(3)
      ).valueChanges();
    }

  ngOnInit() {
    this.setTitle('Home');
    
  }

  data = <any> {
    loading: true,
    profilePictureUrl: "/assets/nate-photo.jpg"
  };

  public setTitle( newTitle: string) {
    let finalTitle = 'Nate LaClaire';
    if (newTitle!='Home') {
      finalTitle = `${newTitle} - ${finalTitle}`;
    }
    this.titleService.setTitle( finalTitle );
  }

}
