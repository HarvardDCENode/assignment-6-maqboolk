import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuItems = [
    {
      _id: 1,
      name: 'Chicken Schnitzel',
      price: 11.99,
      ingredients: 'Chickeen chicken chicken',
      available: true
    },
    {
      _id: 2,
      name: 'Drumsticks and String Beans',
      price: 12.99,
      ingredients: 'Chicken, string beans',
      available: false
    },
    {
      _id: 3,
      name: 'Salt and Pepper Steak',
      price: 13.99,
      ingredients: 'Beef Steak',
      available: true
    },
    {
      _id: 4,
      name: 'Steak Enchilada Bowls with Sweet Potato Rice',
      price: 14.99,
      ingredients: 'Steak , Sweet Potato, Rice',
      available: true
    }
  ];
  constructor() { }

  getAllItems() {
    return this.menuItems;
  }

  getAnItem(itemId) {
    return this.menuItems.find((item) => item._id == itemId);
  }

}
