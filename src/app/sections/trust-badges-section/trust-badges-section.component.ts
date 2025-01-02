import { NgFor } from '@angular/common';
import { TrustBadgeModel } from '../../models/index.type';
import { Trust_Badges } from './../../constants/data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trust-badges-section',
  imports: [NgFor],
  templateUrl: './trust-badges-section.component.html',
  styleUrl: './trust-badges-section.component.scss'
})
export class TrustBadgesSectionComponent {
  Trust_Badges : TrustBadgeModel[] = Trust_Badges;
}
