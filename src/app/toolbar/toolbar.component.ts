import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  lock_enabled: boolean;
  @Output() lockChange = new EventEmitter();
  constructor() {
    this.lock_enabled = false;
  }

  notifyGrid(): void {
    this.lock_enabled = !this.lock_enabled;
    this.lockChange.emit(this.lockChange);
  }

  ngOnInit() {
  }

}
