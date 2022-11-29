import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent {
  Id =""

  readValue = () =>
  {
    let data:any = {"Id":this.Id}
  }


}
