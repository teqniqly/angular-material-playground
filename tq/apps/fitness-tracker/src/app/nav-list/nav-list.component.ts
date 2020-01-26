import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tq-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {
  constructor() {}

  @Output()
  closeSidenav: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit() {}

  onCloseSidenav(): void {
    this.closeSidenav.emit();
  }
}
