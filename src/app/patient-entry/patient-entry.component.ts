import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {
  Name=""
  Id=""
  Address=""
  Contact=""
  Date=""
  Doctor=""
  Image=""

  readValue = () =>
  {
    let data:any = {"PatientName":this.Name,"Id":this.Id,"Address":this.Address,"Contact":this.Contact,"Date":this.Date,"Doctor":this.Doctor,"Image":this.Image}

    
  }


}
