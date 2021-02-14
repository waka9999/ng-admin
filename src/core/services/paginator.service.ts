import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root',
})
export class NgPaginatorService extends MatPaginatorIntl {
  constructor() {
    super();
    this.itemsPerPageLabel = '每页';
    this.nextPageLabel = '向后';
    this.previousPageLabel = '向前';
    this.firstPageLabel = '首页';
    this.lastPageLabel = '末页';
  }

  getRangeLabel = function (page: number, pageSize: number, length: number) {
    const of = ' 共 ';
    if (length === 0 || pageSize === 0) {
      return '0' + of + length;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;
    return startIndex + 1 + ' 到 ' + endIndex + of + length + ' 条';
  };
}
