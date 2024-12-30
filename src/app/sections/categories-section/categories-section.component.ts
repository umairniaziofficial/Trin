import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CATEGORY_ITEM } from '../../constants/data';
import { CategoryModel } from '../../models/category.type';

@Component({
  selector: 'app-categories-section',
  imports: [NgFor],
  templateUrl: './categories-section.component.html',
  styleUrl: './categories-section.component.scss'
})
export class CategoriesSectionComponent {
  Categories : CategoryModel[] = CATEGORY_ITEM;
}
