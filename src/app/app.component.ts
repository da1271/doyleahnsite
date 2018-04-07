import { Component, OnInit, Input } from '@angular/core';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  home: boolean = true;
  portfolio: boolean = false;
  contact: boolean = false;
    ngOnInit() {

  }
    homeClicked(){
        this.portfolio = false;
        this.contact = false;
        this.home = true;
    }
    portfolioClicked(){
      this.portfolio = true;
      this.contact = false;
      this.home = false;
    }
    contactClicked(){
      this.portfolio = false;
      this.contact = true;
      this.home = false;
    }

}
