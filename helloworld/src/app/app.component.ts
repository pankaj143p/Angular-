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
  ngOnInit() {
    this.title = 'Hello World from BridgeLabz.';
  }
}
