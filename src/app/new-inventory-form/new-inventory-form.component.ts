import { Component, OnInit, Input } from '@angular/core';
import { InventoryService } from '../inventory.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-new-inventory-form',
  templateUrl: './new-inventory-form.component.html',
  styleUrls: ['./new-inventory-form.component.css'],
})
export class NewInventoryFormComponent implements OnInit {
  @Input() itemName: string;
  @Input() itemCategory: string;
  @Input() price: number;
  @Input() stock: number;

  constructor(private _myService: InventoryService, private router:Router) {}
  onSubmit() {
    console.log(
      'You submitted: ' +
        this.itemName +
        ' ' +
        this.itemCategory +
        ' ' +
        this.price +
        ' ' +
        this.stock
    );
    this._myService.addInventory(
      this.itemName,
      this.itemCategory,
      this.price,
      this.stock
    );
    this.router.navigate(['/listInventory']);
  }

  ngOnInit() {}
}
