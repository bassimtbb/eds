import { Component } from '@angular/core';
export interface competence {
  name: string;
}
@Component({
  selector: 'app-idee',
  templateUrl: './idee.component.html',
  styleUrls: ['./idee.component.scss']
})
export class IdeeComponent {
  competences: competence[] = [
    {name: 'apple'},
    {name: 'banana'},
    {name: 'strawberry'},
    {name: 'orange'},
    {name: 'kiwi'},
    {name: 'cherry'},
  ];



}
