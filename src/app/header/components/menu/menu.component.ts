import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuData = [{
    text: 'Categoria 1',
    link: 'categoria-1'
  },{
    text: 'Categoria 2',
    link: 'categoria-2'
  },{
    text: 'Categoria 3',
    link: 'categoria-3'
  },{
    text: 'Categoria 4',
    link: 'categoria-4'
  },];

  constructor() { }

  ngOnInit(): void {
  }

}
