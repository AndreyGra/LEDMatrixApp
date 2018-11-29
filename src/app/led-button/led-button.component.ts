import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-led-button',
  templateUrl: './led-button.component.html',
  styleUrls: ['./led-button.component.scss']
})


export class LedButtonComponent implements OnInit {

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
