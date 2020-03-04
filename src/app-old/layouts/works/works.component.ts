import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  rows: { designation: string; quantity: number; unitary: number; total: number; }[];
  soustotal = 0;
  solde: number;
  remise: number;
  constructor() { }

  hello() {
    alert('coucou tout le monde');
  }

  ngOnInit() {
    // initialisation des lignes du tableau
    this.rows = [
      {
        'designation' : 'Chapiteaux',
        'quantity' : 3,
        'unitary' : 0,
        'total': 0
      },
      {
        'designation' : 'Chaises pliantes',
        'quantity' : 50,
        'unitary' : 0,
        'total': 0
      },
      {
        'designation' : 'Tapis rouges',
        'quantity' : 2,
        'unitary' : 0,
        'total': 0
      },
      {
        'designation' : 'Tapis rouges',
        'quantity' : 2,
        'unitary' : 0,
        'total': 0
      },
      {
        'designation' : 'Tapis rouges',
        'quantity' : 2,
        'unitary' : 0,
        'total': 0
      },
      {
        'designation' : 'Tapis rouges',
        'quantity' : 2,
        'unitary' : 0,
        'total': 0
      },
      {
        'designation' : 'Tapis rouges',
        'quantity' : 2,
        'unitary' : 0,
        'total': 0
      }
    ];
    // calcul du chaque total en fonction du chaque prix unitaire qui varie selon leur designation
    for (let i = 0; i < this.rows.length; i++) {
      if (this.rows[i].designation === 'Chapiteaux') {
        this.rows[i].unitary = 35000;
      }
      if (this.rows[i].designation === 'Chaises pliantes') {
        this.rows[i].unitary = 400;
      }
      if (this.rows[i].designation === 'Tapis rouges') {
        this.rows[i].unitary = 5000;
      }
      this.rows[i].total = this.rows[i].quantity * this.rows[i].unitary;
      this.soustotal += this.rows[i].total;
    }
    // remise
    this.remise = 20 / 100;
    // dernier solde apres la remise
    this.solde = this.soustotal * (1 - this.remise);
  }

}
