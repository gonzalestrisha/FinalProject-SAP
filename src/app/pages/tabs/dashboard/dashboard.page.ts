import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  totalIncome$!: Observable<number>;
  totalPendingRequests!: number;

  constructor(private dataService: DataService) {
    this.dataService.countPendingRequests().subscribe(count => {
      this.totalPendingRequests = count;
    });

    this.totalIncome$ = this.dataService.getTotalIncome();
  }    
    ngOnInit() {
    }
}
