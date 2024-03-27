import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Cars1Service {

  constructor(private _httpClient: HttpClient) {

  }



  getfilteredCars1(term: string): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter=" + term);
  }
  getsortedCars(column: string, Order: string): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy=" + column + "&order=" + Order);
  }
  getPaged(pageNo: number): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page=" + pageNo);
  }
  createcar(data:any){
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",data);
  }
  deletecars(id: string) {
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/" + id);
  }
  

  loadData(queries:any){
    let str = "";

    if(queries.filter){
      str +="filter="+queries.filter+"&";
    } 
    if(queries.pageNo){
      str +="page"+queries.pageNo+"&";
      str +="limit="+queries.limit+"&";
    }
    if(queries.sortBy){
      str +="sortBy="+queries.sortBy+"&";
    } 
    if(queries.order){
      str +="order="+queries.order+"&";
    } 

    console.log(queries,str);

    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?"+str);
  }


}
