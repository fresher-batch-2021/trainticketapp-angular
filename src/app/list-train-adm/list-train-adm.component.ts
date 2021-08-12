import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-train-adm',
  templateUrl: './list-train-adm.component.html',
  styleUrls: ['./list-train-adm.component.css']
})
export class ListTrainAdmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  trainListAdm = [
    { sno : "1", trainNo : "12345" , trainName : "Purl City Super Fast Express" , noPassenger : 1500 , sourceStation : "Tuticorin" , destnationStation : "Chennai" , arrival : "02:30" , depart : "02:40" , status : "Started" ,action : "Pallavan" },
    { sno : "2", trainNo : "98765" , trainName : "Kanyakumari Express" , noPassenger : 500 , sourceStation : "madurai" , destnationStation : "Thiruchendur" , arrival : "14:15" , depart : "14:30" , status : "Hold" ,action : "Kanyakumari" },
    { sno : "3", trainNo : "05021" , trainName : "Pallavan Express" , noPassenger : 700 , sourceStation : "Nagercoil" , destnationStation : "Tirunelveli" , arrival : "00:00" , depart : "00:20" , status : "Waiting" ,action : "Pallavan" }
];

}
