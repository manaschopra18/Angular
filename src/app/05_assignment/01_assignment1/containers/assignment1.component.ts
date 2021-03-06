import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component {
  info: String;

  @Output()
  onInput(info: string) {
    this.info = info;
  }
}
