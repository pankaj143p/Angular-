import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_app';
  imgUrl='logo.png';
  url='https://www.bridgelabz.com';
  name : string ="";
  ngOnInit() {
    this.title = 'Hello World from BridgeLabz.';
  }
  onClick($event: MouseEvent): void {
    console.log("Save button is clicked!", $event);
    window.open(this.url, '_blank'); 
  }
}



