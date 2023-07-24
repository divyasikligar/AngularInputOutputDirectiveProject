import { Component , Input, Output, EventEmitter} from '@angular/core';
import { Person } from '../../model/Pinfo';

@Component({
  selector: 'app-infocomp',
  templateUrl: './infocomp.component.html',
  styleUrls: ['./infocomp.component.css']
})
export class InfocompComponent {

  @Input() pdata:Person | any
  

  @Output() datasend = new EventEmitter<Person>()

  deldata(d : any){

   this.datasend.emit(d)

  }

}
