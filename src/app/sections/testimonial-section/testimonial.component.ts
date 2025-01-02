import { NgFor } from '@angular/common';
import { TestimonialModel } from '../../models/index.type';
import { Testimonial } from './../../constants/data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  imports: [NgFor],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
  Testimonial : TestimonialModel[] = Testimonial;


}
