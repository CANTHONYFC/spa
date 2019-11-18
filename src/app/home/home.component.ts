import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/User';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
friends:User [];
  constructor() { 
let myUser1:User={
  nick:'CFALCON',
  age:16,
 subnick:'PAPI',
 email:'cfalcin.ti@sacooliveros.edu.pe',
 uid:1,
 friend:true
}
let myUser3:User={
  nick:'CFALCON',
  age:16,
 subnick:'PAPI',
 email:'cfalcin.ti@ssssssssssacooliveros.edu.pe',
 uid:3,
 friend:true
}
let myUser4:User={
  nick:'CFALCON',
  age:16,
 subnick:'PAPI',
 email:'cfalcin.ti@sacooliverozdsds.edu.pe',
 uid:4,
 friend:true
}
let myUser5:User={
  nick:'CFALCON',
  age:16,
 subnick:'PAPI',
 email:'cfalcin.ti@sdfsdfsf.edu.pe',
 uid:5,
 friend:false
}
this.friends=[myUser1,myUser3,myUser4,myUser5]

  }

  ngOnInit() {
  }

}
