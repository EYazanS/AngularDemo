import { Person } from './../Models/PersonResource';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.css']
})
export class PeopleFormComponent implements OnInit {

  person: Person = {
    dateOfBirth: null,
    fullName: null,
    id: null
  };

  constructor() { }

  ngOnInit(): void {
  }

}
