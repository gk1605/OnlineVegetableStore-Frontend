import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vegetable } from './vegetable';



@Injectable({
  providedIn: 'root'
})
export class VegetablesService {

  selectedVegetable:any;
  rootEndpoint:string='http://localhost:8080/vegetable/'
  AllVegetablesEndPoint:string = this.rootEndpoint+'allvegetable';
  FilterEndpoint:string='http://localhost:8080/vegetable/vegetablefromHtoL';
  private http:HttpClient;

  
  vegetables:any[]=[];
  
  constructor( http1:HttpClient) {
    this.http=http1
   
    
   }
      
  getAllvegetables():Observable<any>{
    return this.http.get<any>(`${this.AllVegetablesEndPoint}`);

  }
  
  getAll():Observable<Vegetable>
  {
    return this.http.get<Vegetable>(`${this.AllVegetablesEndPoint}`);
  }

  receivevegetables(obj:any){
    this.selectedVegetable=obj;
  }
  cartvegetable(obj:any){
    this.vegetables.push(obj);

  }
  getfilter():Observable<any>{
    return this.http.get<any>(`${this.FilterEndpoint}`);

  }
  
 
 
}