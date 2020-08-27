import { State } from './../store/reducers/people.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import { Person } from '../Models/PersonResource';

@Component({
  selector: 'app-people-grid',
  templateUrl: './people-grid.component.html',
  styleUrls: ['./people-grid.component.css']
})
export class PeopleGridComponent implements OnInit {

  people: Person[] = [];

  constructor(private store: Store) {

  }

  ngOnInit(): void {

  }

}
