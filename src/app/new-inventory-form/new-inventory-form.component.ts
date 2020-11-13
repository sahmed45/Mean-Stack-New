import { Component, OnInit, Input } from '@angular/core';
import { InventoryService } from '../inventory.service';
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

  constructor(private _myService: InventoryService) {}
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
  }

  ngOnInit() {}
}
