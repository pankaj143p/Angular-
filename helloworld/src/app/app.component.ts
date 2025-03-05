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
  nameError : string ="";
  ngOnInit() {
    this.title = 'Hello World from BridgeLabz.';
  }
  onClick($event: MouseEvent): void {
    console.log("Save button is clicked!", $event);
    window.open(this.url, '_blank'); 
  }
  onInput(){
    // regex for valid name
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.name)){
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect!";
  }
}



