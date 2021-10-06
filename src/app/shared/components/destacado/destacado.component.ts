import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'destacado',
  templateUrl: './destacado.component.html',
  styleUrls: ['./destacado.component.css']
})
export class DestacadoComponent implements OnInit {
  destacadosData = [{
    img: 'https://i.blogs.es/380a41/google-fotos/450_1000.jpg',
    name: 'Nombre del lugar',
    stars: 3,
    description: 'Lorem...',
    lastPrice: '$1600',
    currentPrice: '$950'
  },{
    img: 'https://i.blogs.es/380a41/google-fotos/450_1000.jpg',
    name: 'Nombre del lugar',
    stars: 2,
    description: 'Lorem...',
    lastPrice: '$1600',
    currentPrice: '$950'
  },{
    img: 'https://i.blogs.es/380a41/google-fotos/450_1000.jpg',
    name: 'Nombre del lugar',
    stars: 4,
    description: 'Lorem...',
    lastPrice: '$1600',
    currentPrice: '$950'
  },{
    img: 'https://i.blogs.es/380a41/google-fotos/450_1000.jpg',
    name: 'Nombre del lugar',
    stars: 5,
    description: 'Lorem...',
    lastPrice: '$1600',
    currentPrice: '$950'
  },{
    img: 'https://i.blogs.es/380a41/google-fotos/450_1000.jpg',
    name: 'Nombre del lugar',
    stars: 1,
    description: 'Lorem...',
    lastPrice: '$1600',
    currentPrice: '$950'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
