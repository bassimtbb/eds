import { Component } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent {

  projectcount:number = 0;
  accuratecount:number = 0;
  clientcount:number = 0;
  customerfeedback:number = 0;

  projectcountstop:any = setInterval(()=>{
    this.projectcount+=20;
    if(this.projectcount ==12320)
    {
      clearInterval(this.projectcountstop);
    }

  },-180) 


  accuratecountstop:any = setInterval(()=>{
    this.accuratecount+=2;
    if(this.accuratecount == 1000)
    {
      
      clearInterval(this.accuratecountstop);
    }
  },0) 


  clientcountstop:any = setInterval(()=>{
    this.clientcount++;
    if(this.clientcount == 125)
    {
      
      clearInterval(this.clientcountstop);
    }
  },15)

  customerfeedbackstop:any = setInterval(()=>{
    this.customerfeedback++;
    if(this.customerfeedback == 100)
    {
      
      clearInterval(this.customerfeedbackstop);
    }
  },10)


}
