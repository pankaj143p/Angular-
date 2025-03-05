import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'helloworld';
  imgUrl='logo.png';
  url='https://www.bridgelabz.com';
  ngOnInit() {
    this.title = 'Hello World from BridgeLabz.';
  }
  onClick($event: MouseEvent): void {
    console.log("Save button is clicked!", $event);
    window.open(this.url, '_blank'); 
  }
}
