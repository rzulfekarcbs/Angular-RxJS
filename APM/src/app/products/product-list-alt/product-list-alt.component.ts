import { Component, OnInit, OnDestroy } from '@angular/core';

import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html'
})
export class ProductListAltComponent implements OnDestroy {
  pageTitle = 'Products';
  errorMessage = '';
  selectedProductId: number;
  products$ = this.productService.products$
                .pipe(
                catchError(err => {
                  this.errorMessage = err;
                  return EMPTY;
                })
              );

  constructor(private productService: ProductService) { }

  ngOnDestroy(): void {
  }

  onSelected(productId: number): void {
    console.log('Not yet implemented');
  }
}
