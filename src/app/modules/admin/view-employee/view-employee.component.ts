import { Component } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { CommonService } from '../../shared/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {
  constructor(private common:CommonService ,private route:Router){

  }
  enqq:any[];
  getenquiry(){

   
  }
  ngOnInit(){
    this.common.getEmployee().subscribe((en:any[])=>{

      
      this.enqq=en;



      
    })
  }
}
