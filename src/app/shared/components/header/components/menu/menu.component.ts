import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuData = [{
    text: 'Page 1',
    link: 'page-1'
  },{
    text: 'Page 2',
    link: 'page-2'
  },{
    text: 'Page 3',
    link: 'page-3'
  },{
    text: 'Page 4',
    link: 'page-4'
  },];

  constructor() { }

  ngOnInit(): void {
  }

}
