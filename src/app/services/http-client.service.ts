import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpClientService {

  constructor(private http: Http) { }

  createAuthorizationHeader(headers: Headers) {
    //don't use this key get your own! on streamupbox.com and change URL from localhost to https://streamupbox.com
    // tslint:disable-next-line:max-line-length
    headers.append('authorization', 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU2NWExNjE4MDNkNDg3ZmVmZTgwZjQ1ZDFkZGIzZjcyNmE3M2RhNTgzMjRmMDQxZmMzZjgyNzBiY2IyYjY5N2RjZWViYWExMjkwMzg2YjY4In0.eyJhdWQiOiIxIiwianRpIjoiZTY1YTE2MTgwM2Q0ODdmZWZlODBmNDVkMWRkYjNmNzI2YTczZGE1ODMyNGYwNDFmYzNmODI3MGJjYjJiNjk3ZGNlZWJhYTEyOTAzODZiNjgiLCJpYXQiOjE0OTAwMzY5NTAsIm5iZiI6MTQ5MDAzNjk1MCwiZXhwIjoxODA1NTY5NzUwLCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.FUgXrfbGRIt8_RcvGVUL_U17TVpPxYvCGkm1c59JBw7JwFl6eb_JN2pJgCVdrRDwb9DcQ4HpN-FVqkwEgux0v2ihN6MpjYc0bi7CM75jLSqtlJ3OEVlecc55upWXQSF14rb6V8sOPXWmk9l7BvZbjUdjVhwuJfZnaq91hmo23AS3-QLAtSybfyUy8cPOmrFQkvPO8I3qQlupDWf0MMmpwj1bXTIJazO01q1Rw3HVvSFwpJPcf1cPw6R05UU_9XdoG0JHNnZdTtuVxyQhR25dBGb5pJQVzTNglFZI2z7TYQbERQkEW_7A8BLGh9RM4-BXvOwRbsrLdOS7sy511WksbRnHzsdfqlgalnGZDDv0IUYTu93CMTjWqEigbbm378DQJgWhhkh7XdFq2HGqUlPTkETYHVNe7Lo9hFnbXEHeOWbt3XCiBmli4QH5I6cu8LKOFITe8c3D0E1VVZoP3M5Vsk2mI7JKtI4YmlPaVqXuKHf_R4UWXvgd1is0JT_97gVixjig_lOrH42a0ixRbChj6rSuliojBcNAr8xrvu8RdSLvX2Xg8l2g51FZGMK251y2NSnFXnXHtM0ViuXpYaoN_xKK4pCd8WrtsPlrTQebA7RPnPdNfLxY-O-tQCXt6JZ-WYLt3-YMMtwRpTTaB3rWLHaix7qABmOuM_IgyR6LN-s');
  }


  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }


  getFolders() {
    // {undefined/undefined} is supposed to be the parent/subfolders of a folder id if any
    return this.get('http://localhost:8000/api/folders/list/undefined/undefined')
      .map(res => res.json());
  }
  getSubFolders() {
    // {undefined} is supposed to be the parent of a folder id if any
    return this.get('http://localhost:8000/api/folders/list/undefined/subfolders')
      .map(res => res.json());
  }
  getPath(childId: number) {
    return this.get('http://localhost:8000/api/gmePath/' + childId)
      .map(res => res.json());
  }}
