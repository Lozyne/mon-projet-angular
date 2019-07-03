import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  isAuth = false;
  appareils:any[];

  lastUpdate = new Promise((resolve,reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date)
    }, 2000);;
  });

  constructor( private appareilService: AppareilService){
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }
   
  onAllumer(){
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if(confirm('valider ou pas ')){
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }
}
