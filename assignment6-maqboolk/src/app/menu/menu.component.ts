import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [MenuService]
})
export class MenuComponent implements OnInit {

  menu = [];

  constructor(private menuService: MenuService) {

  }

  ngOnInit(): void {
    this.menu = this.menuService.getAllItems();
  }

}
