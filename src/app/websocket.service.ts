import { Observable, Subject, Observer } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() { }

  // Subject is a special observer that can be multicast
  private subject: Subject<MessageEvent>;

  public connect(url): Subject<MessageEvent> {
    if ( !this.subject) {
      this.subject = this.create(url);
      console.log('Successfully Connected!');
    }

    return this.subject;
  }

  private create(url: string): Subject<MessageEvent> {
    const ws = new WebSocket(url);

    const observable = Observable.create(
      (obs: Observer <MessageEvent>) => {
        ws.onmessage = obs.next.bind(obs);
        ws.onerror   = obs.error.bind(obs);
        ws.onclose   = obs.complete.bind(obs);
        return ws.close.bind(ws);
      });

    const observer = {
      next: (data: Object) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      }
    };

    return Subject.create(observer, observable);
  }
}
