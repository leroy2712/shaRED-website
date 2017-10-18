import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  request: Request;
  current: Date;
  today: string;
  now: string;

  constructor() { }

  ngOnInit() {
    this.request = {
      hospital: 'Karen Hospital',
      type: 'O+',
      condition: 'Critical',
      date: '30 February 2018',
      time: '24:03',
      response: ['leroyomondi@gmail.com', 'kanyewest@gmail.com']
    };
  }

  makeRequest (requestHospital, requestType, requestCondition) {
    //get current date
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();

    //get current time
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();

    //store hospital request information
    this.request.hospital = requestHospital;
    this.request.type = requestType;
    this.request.condition = requestCondition;
    this.request.date = day + '/' + month + '/' + year;
    this.request.time = hour + ':' + minute + ':' + second;

    alert(this.request.hospital);
    alert(this.request.type);
    alert(this.request.condition);
    alert(this.request.date);
    alert(this.request.time);
  }

}

interface Request {
  hospital: string;
  type: string;
  condition: string;
  date: string;
  time: string;
  response: string[];
}