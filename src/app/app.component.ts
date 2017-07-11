import {Component} from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public people = [
    {
      name: 'John',
      surname: 'Doe'
    },
    {
      name: 'Mark',
      surname: 'Smith'
    }, {
      name: 'Jan',
      surname: 'Kowalski'
    }, {
      name: 'Adrian',
      surname: 'Nowak'
    }, {
      name: 'Karol',
      surname: 'Abacki'
    }
  ]

  public onPersonRemove(_person) {
    _.remove(this.people, (person) => person === _person)
  }

}
