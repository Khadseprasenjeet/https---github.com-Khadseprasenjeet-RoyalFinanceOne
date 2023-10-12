import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-dashboard',
  templateUrl: './application-dashboard.component.html',
  styleUrls: ['./application-dashboard.component.css']
})
export class ApplicationDashboardComponent implements OnInit{

  type:string;
  ngOnInit(): void {
      this.type=sessionStorage.getItem('type');
  }

}
