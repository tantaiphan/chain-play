export class PagingVM {
  page: number;
  pageSize: number;
  keyWord: string;
  keyFillter: string;

  constructor() {
    this.page = 1;
    this.pageSize = 100;
    this.keyWord = '';
    this.keyFillter = '';
  }
}
