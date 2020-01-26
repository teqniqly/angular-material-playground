import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tq-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  constructor() {}

  @Output()
  toggleSidenav: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit() {}

  onToggleSidenav(): void {
    this.toggleSidenav.emit();
  }
}
