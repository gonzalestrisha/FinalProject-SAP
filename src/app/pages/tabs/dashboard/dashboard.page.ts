import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  totalIncome$!: Observable<number>;
  pendingRequestsCount$!: Observable<number>;

  constructor(private dataService: DataService) {
    this.totalIncome$ = interval(2000).pipe(
      switchMap(() => this.dataService.getTotalIncome())
    );
  }
  
  ngOnInit() {
    this.pendingRequestsCount$ = interval(2000).pipe(
      switchMap(() => this.dataService.getPendingRequestsCount())
    );
  }
}