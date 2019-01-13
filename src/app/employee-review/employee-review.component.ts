import { Component, OnInit } from '@angular/core';
import { EmployeeReview } from '../employee-review';

@Component({
  selector: 'app-employee-review',
  templateUrl: './employee-review.component.html',
  styleUrls: ['./employee-review.component.css']
})
export class EmployeeReviewComponent  {

  constructor() { }
  EmployeeReviewObj=new EmployeeReview("vijay","patil","1/10/2018","employeeTitle","Marketing",true,"detailInfo","prashant","Upasani");
  

}
