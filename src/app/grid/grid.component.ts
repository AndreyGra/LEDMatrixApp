import { timeout, map, tap } from 'rxjs/operators';
import { Component, OnInit, NgZone, DoCheck, IterableDiffers, Input } from '@angular/core';
import { GridService } from '../grid-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  button_states: boolean[][];
  @Input() grid_locked: boolean;

  constructor(private gridService: GridService) {
    this.button_states = gridService.getDefaultGridData();
  }

  alertMe(location: [number, number]) {
    const myObserver = {
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => {this.button_states[location[0]][location[1]] = !this.button_states[location[0]][location[1]]; }
    };

    this.gridService.sendGridUpdate([location[0], location[1]]).pipe(timeout(1000)).subscribe(myObserver);

  }

  ngOnInit() {
  }

  // ngDoCheck(): void {
  //   // Called every time that the input properties of a component or a directive are checked.
  //   // Use it to extend change detection by performing a custom check.
  //   // Add 'implements DoCheck' to the class.
  //   // const changes = this.iterableDiffer.diff(this.button_states[0]);
  //   // if (changes) {
  //   //     console.log('Changes detected!');
  //   //     console.log(changes);
  //   // }
  // }

}
