import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-m',
  templateUrl: './profile-m.component.html',
  styleUrls: ['./profile-m.component.scss']
})

export class ProfileMComponent {
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
