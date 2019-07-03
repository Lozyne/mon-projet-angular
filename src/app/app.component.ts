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
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  isAuth = false;
  appareils:any[];



  constructor( private appareilService: AppareilService){
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

}
