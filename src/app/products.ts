import { UrlCreationOptions } from "@angular/router";

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'iPhone 13',
      image: 'assets/images/Apple-iPhone-13-Pro-Max-image.jpg',
      price: 499,
      description: 'The best medium-range phone in the market',
    },    
    {
      id: 2,
      name: 'iPhone 13 Mini',
      image: 'assets/images/apple_iphone_13_mini_azul_01_l.jpg',
      price: 299,
      description: 'A budget phone with one of the best cameras'
    },
    {
      id: 3,
      name: 'iPhone 13 Pro Max',
      image: 'assets/images/apple-iphone-13-pro-max-01.jpg',
      price: 799,
      description: 'A phone with one of the best screens'
    },   
  ];