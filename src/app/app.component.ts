import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rest-countries-api-project';
  mode = true;

  changeMode() {
    this.mode = !this.mode;
  }
}
