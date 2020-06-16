import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Lasagna", "Garfield's favourite food", "http://tiny.cc/opquqz"),
    new Recipe("Bolognese", "Garfield's favourite food", "http://tiny.cc/opquqz")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
