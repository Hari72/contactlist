import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Contact } from './contact';
import 'rxjs/add/operator/map';


@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  // retrieving contacts
  getContacts() {
    return this.http.get('http://localhost:3000/contacts').map(res => res.json());
  }

  //adding a contact
  addContact(newContact) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/contact', newContact, {headers: headers}).map(res => res.json());
  }

  // deleting a contact
  deleteContact(id) {
    return this.http.delete('https://localhost:3000/contact/' + id).map(res => res.json());
  }

}
