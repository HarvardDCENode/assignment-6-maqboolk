import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() item;
  // @Input() price: string;
  // @Input() ingredients: string;
  // @Input() available: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}