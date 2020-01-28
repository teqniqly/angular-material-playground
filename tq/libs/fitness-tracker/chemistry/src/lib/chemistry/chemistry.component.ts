import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { PeriodicElement } from './models';
import { ChemistryMediatorService } from '../mediators/chemistry-mediator.service';

@Component({
  selector: 'tq-chemistry',
  templateUrl: './chemistry.component.html',
  styleUrls: ['./chemistry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChemistryComponent implements OnInit {
  constructor(public mediator: ChemistryMediatorService) {}
  ngOnInit() {}
}
