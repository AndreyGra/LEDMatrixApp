import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, } from 'rxjs';
import { timeout, catchError, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class GridService {

  constructor(private http: HttpClient) {
    }

  getDefaultGridData(): boolean[][] {

    const defaultArray: boolean[][] = new Array<Array<boolean>>(8);
    for (let col = 0; col < 8 ; col++) {
      defaultArray[col] = new Array<boolean>(8);
      for (let row = 0; row < 8 ; row++) {
        defaultArray[col][row] = true;
      }
    }

    return defaultArray;
  }

  sendGridUpdate([row, col]: [number, number]): Observable<any> {
    const headers = new HttpHeaders ()
                       .set('Content-Type', 'text/plain');

    return this.http.post(`http://192.168.43.81/changePixel?row=${row}&col=${col}`, {responseType: 'text'});
   }
}
 // 192.168.43.81'
