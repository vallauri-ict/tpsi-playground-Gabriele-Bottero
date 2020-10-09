import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names = ["Aureliano Adami","Vladimir Putin","Farchetto Michele","Mia Khalifa","Jordi El Polla","Jessa Rhodes","Mister Giampaolo","Karol Linetty","Gesù Solonome","Pistrelo Arrabbiato"];
  myName = 'Gabriele Bottero';

  changeName(){
    this.myName = this.names[Math.floor(Math.random()*10)];
  }
}
