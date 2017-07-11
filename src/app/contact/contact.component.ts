import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input() person;
  @Output() remove = new EventEmitter();

  removePerson() {
    this.remove.emit(this.person);
  }

}
