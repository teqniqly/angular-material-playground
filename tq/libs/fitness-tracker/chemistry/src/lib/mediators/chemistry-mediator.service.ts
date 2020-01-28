import { Injectable } from '@angular/core';
import { ChemistryService } from '../services/chemistry.service';
import { PeriodicElement } from '../chemistry/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChemistryMediatorService {
  constructor(private chemistryService: ChemistryService) {
    this.dataSource$ = this.chemistryService.getPeriodicTable();
    this.displayedColumns$ = this.chemistryService.getDisplayedColumns();
  }

  public dataSource$: Observable<PeriodicElement[]> = new Observable<
    PeriodicElement[]
  >();
  public displayedColumns$: Observable<string[]> = new Observable<string[]>();
}
