import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  totalPendingRequests: number;

  constructor(private dataService: DataService) {
    this.dataService.countPendingRequests().subscribe(count => {
      this.totalPendingRequests = count;
      
      ngOnInit() {
      }
    
    });


}
