import { Person } from './../Models/PersonResource';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PeopleService } from '../people.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { throws } from 'assert';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.css']
})
export class PeopleFormComponent implements OnInit {

  errors: string[] = [];

  model: Person = {
    dateOfBirth: null,
    fullName: null
  };

  id: string = null;
  isUpdate = false;

  constructor(private service: PeopleService, public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.PopulateId();
  }

  public onSubmit(): void {
    this.errors = [];

    if (this.isUpdate) {
      this.service.UpdatePerson(this.id, this.model)
        .subscribe(
          res => {
            this.router.navigateByUrl('/people');
          },
          res => {
            this.HandleErrors(res);
          }
        );
    } else {
      this.service.AddPerson(this.model)
        .subscribe(
          res => {
            this.router.navigateByUrl('/people');
          },
          res => {
            this.HandleErrors(res);
          }
        );
    }
  }

  private PopulateId(): void {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.isUpdate = true;
        this.id = params.id;
        this.service.GetPerson(this.id)
          .subscribe(res => this.model = res, err => this.HandleErrors(err));
      }
    });
  }

  private HandleErrors(res: { error: { errors: string[]; }; }): void {
    const err = res.error.errors;
    const keys = Object.keys(err);
    keys.forEach(key => {
      this.errors = this.errors.concat(err[key]);
    });
  }
}
