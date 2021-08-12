import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-train-adm',
  templateUrl: './add-train-adm.component.html',
  styleUrls: ['./add-train-adm.component.css']
})
export class AddTrainAdmComponent implements OnInit {
  trainNo: any;
  trainName: any;
  noPassenger: any;

  constructor() { }

  ngOnInit(): void {
  }

  addTrain() {
    let trainNo = this.trainNo;
    let trainName = this.trainName;
    let noPassenger = this.noPassenger;


    if(trainNo.length != 5){
        alert("Invalid Train no");
    }
    else{
    alert("Form submission completed");
    window.location.href = "list_train_adm.html";
    }


}

}
