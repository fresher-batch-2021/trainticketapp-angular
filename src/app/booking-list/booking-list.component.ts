import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  book_list = [
    { sno : "1", trainNo : "12345" , trainName : "pallavan" , fromStation : "madurai" , toStation : "chennai" , noTicket : 5 , journeyDate : "10-08-2021" , ticketAmount : "Rs. 2000" , status : "waiting"  }, {sno : "2", trainNo : "54321" , trainName : "Purl city" , fromStation : "madurai" , toStation : "Trichy" , noTicket : 2 , journeyDate : "12-08-2021" , ticketAmount : "Rs. 700" , status : "hold"  }
];


}
