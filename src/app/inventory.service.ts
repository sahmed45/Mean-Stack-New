import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class InventoryService {
  constructor(private http: HttpClient) {}

  // Uses http.get() to load data
  getInventory() {
    return this.http.get('http://localhost:8000/inventory');
  }
  deleteItem(itemId: string) {
    this.http
      .delete('http://localhost:8000/inventory/' + itemId)
      .subscribe(() => {
        console.log('Deleted: ' + itemId);
      });
    location.reload();
  }

  // Uses http.post() to post data
  addInventory(
    itemName: string,
    itemCategory: string,
    price: number,
    stock: number
  ) 
  {
    this.http
      .post('http://localhost:8000/inventory', {
        itemName,
        itemCategory,
        price,
        stock,
      })
      .subscribe((responseData) => {
        console.log(responseData);
      });
    
  }
  updateInventory(itemID: string,itemName: string,
    itemCategory: string,
    price: number,
    stock: number) {
    //request path http://localhost:8000/students/5xbd456xx 
    //first and last names will be send as HTTP body parameters 
        this.http.put("http://localhost:8000/inventory/" 
             + itemID,{  itemName,
              itemCategory,
              price,
              stock, })
          .subscribe(() => {
              console.log('Updated: ' + itemID);
          });
          location.reload();
    }

}
