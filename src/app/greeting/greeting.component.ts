import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

welcome:string = 'Welcome To The Valorant Agents Guide'

  constructor() { }

  ngOnInit(): void {
  }

}
