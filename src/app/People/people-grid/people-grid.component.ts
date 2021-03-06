import { State } from './../store/reducers/people.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import { Person } from '../Models/PersonResource';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-people-grid',
  templateUrl: './people-grid.component.html',
  styleUrls: ['./people-grid.component.css']
})
export class PeopleGridComponent implements OnInit {

  people: Observable<Person[]>;
  displayedColumns: string[] = ['fullName', 'dateOfBirth', 'actions'];

  constructor(private store: Store<fromStore.PeopleStoreState>) { }

  ngOnInit(): void {
    this.people = this.store.select(fromStore.getAllPeople);
    this.store.dispatch(new fromStore.LoadPeople());
  }
}
