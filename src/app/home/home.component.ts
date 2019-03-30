import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MyData, DataService } from '../shared/services/data.service';
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
    private dataService: DataService,
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
    this.refreshData();

    // Poor person's reload for now, until we have proper
    // web streams and stuff
    let self = this;
    this.refresherInterval = setInterval(function() {
      self.refreshData();
    }, 3000);
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

  refreshData() {
    this.dataService.getData()
      .subscribe(data => {
        this.data = { ...data };
        console.log(this.data)

        if (this.data.loading != true) {
          // We got data, let's stop refreshing now
          clearInterval(this.refresherInterval);
        }
      },
      error => {
        console.log("Something went wrong...")
        console.log(error)
        this.data = <any> {
          loading: true
        }
      })
  }

}
