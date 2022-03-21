export class Product {
  constructor(
    public id: number,
    public productName: string,
    public productDetail: string,
    public productPrice: number,
    public quantity: number,
    public productImageUrl:string[]){}
}
