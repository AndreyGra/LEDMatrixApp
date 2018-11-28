import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss']
})


export class MyButtonComponent implements OnInit {

  @Input() col: Number;
  @Input() row: Number;
  @Input() is_on: Boolean;
  @Input() button_locked: boolean;

  @Output() stateChange = new EventEmitter();

  constructor() {

  }

  public toggleButton(): void {
    this.stateChange.emit([this.row, this.col]);
  }

  ngOnInit() {

  }

}
