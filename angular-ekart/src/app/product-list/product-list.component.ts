import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  product = {
    name: 'iPhone X',
    price: 789,
    color: 'Black',
    discount: 8.5,
    inStock: 10,
    pImage : "/assests/images/Opera Snapshot_2023-09-19_122500_www.google.com.png"
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100)
  }

}
