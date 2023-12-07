// portfolio.component.ts
import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  isLinear = true;
  firstFormGroup: FormGroup = this._formBuilder.group({});
  secondFormGroup: FormGroup = this._formBuilder.group({});
  thirdFormGroup: FormGroup = this._formBuilder.group({});

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }
  openModel(id:string) { 
    const modelDiv = document.getElementById(id);
    if (modelDiv != null) { 
      modelDiv.style.display = 'block';
    console.log(modelDiv);
    }

  }
  
  closeModel(id:string) { 
    const modelDiv = document.getElementById(id);
    if (modelDiv != null) { 
      modelDiv.style.display = 'none';
    }
  }
}
