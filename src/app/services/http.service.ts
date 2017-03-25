import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }
  folders() {
    return this.http
      .get('localhost:8000/api/folders/list')
      .subscribe(res => res.json());
  }
  files() {

  }
  createFolder(name) {

    var head = new Headers();
    head.append('authorization', 'Bearer WiFBDwFHxWQy2HEK6ZGpXB8cOfkYw4ORnIOVrBMZ');
    return this.http.post('http://localhost:8000/api/folders', name, { headers: head })
      .subscribe(res => console.log(res.json()), error => console.log(error.json()), () => console.log('finished'));
  }

}
