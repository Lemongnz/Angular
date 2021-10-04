import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuData = [{
    text: 'CATEGORIA 1',
    link: 'page-1'
  },{
    text: 'CATEGORIA 2',
    link: 'page-2'
  },{
    text: 'CATEGORIA 3',
    link: 'page-3'
  },{
    text: 'CATEGORIA 4',
    link: 'page-4'
  },{
    text: 'CATEGORIA 5',
    link: 'page-5'
  },{
    text: 'CATEGORIA 6',
    link: 'page-6'
  },];

  constructor() { }

  ngOnInit(): void {
  }

}
