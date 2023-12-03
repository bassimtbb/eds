import {Component} from '@angular/core';

interface option {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.scss'],
  })

export class StagesComponent {
  villes: option[] = [
    {value: 'All', viewValue: 'Tous les Villes'},
    {value: 'Tunis', viewValue: 'Tunis'},
    {value: 'Sousse', viewValue: 'Sousse'},
    {value: 'Monastir', viewValue: 'Monastir'},
    {value: 'sfax', viewValue: 'sfax'},
    {value: 'Gabes', viewValue: 'Gabes'},
    {value: 'Mahdia', viewValue: 'Mahdia'},
    {value: 'Bizerte', viewValue: 'Bizerte'},
  ];
  diplomes: option[] = [
    {value: 'ALL', viewValue: 'Tous les diplomes'},
    {value: 'Licence', viewValue: 'Licence'},
    {value: 'Ingenieurie', viewValue: 'Ingenieurie'},
    {value: 'Master', viewValue: 'Master'},
    {value: 'Doctorat', viewValue: 'Doctorat'},
  ];
  Tsatges: option[] = [
    {value: 'ALL', viewValue: 'Tous les types de stage'},
    {value: 'PFE', viewValue: 'Stage PFE'},
    {value: 'PFA', viewValue: 'Stage PFA'},
    {value: 'ETE', viewValue: 'Stage ETE'},
    {value: 'Memoire', viewValue: 'Memoire'},
    {value: 'Doctora', viewValue: 'Doctora'},

  ];
  
  
}
