import { Component } from '@angular/core';
import { Person } from '../model/Pinfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InputOutputActivity';

  Pmail?:string
  Pname?:string

  parr: Person[] =[]

  submitemail(){

    let obj = {prmail:this.Pmail, prname:this.Pname}
    this.parr.push(obj)

  }

  fetch(d: any){
    this.parr.splice(this.parr.indexOf(d),1)
  }
}
