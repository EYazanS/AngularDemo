import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Person } from './Models/PersonResource';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor(private http: HttpClient) {

  }

  GetPeople(): Observable<Person[]> {
    return this.http.get<Person[]>('https://localhost:5001/people');
  }

  GetPerson(id: string): Observable<Person> {
    return this.http.get<Person>(`https://localhost:5001/people/${id}`);
  }

  AddPerson(person: Person): any {
    return this.http.post(`https://localhost:5001/people`, person);
  }

  UpdatePerson(id: string, person: Person): any {
    return this.http.put(`https://localhost:5001/people/${id}`, person);
  }

  DeletePerson(id: string): any {
    return this.http.delete(`https://localhost:5001/people/${id}`);
  }
}
