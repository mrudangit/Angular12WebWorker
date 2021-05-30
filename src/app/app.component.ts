import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-angular';
  private worker: Worker;
  constructor() {
    this.worker = new Worker('test.worker.ts', {type: "module"})
  }
}
