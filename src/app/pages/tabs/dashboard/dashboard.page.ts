import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ChangeDetectorRef } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  pendingRequestsCount$!: Observable<number>;

  constructor(private dataService: DataService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.pendingRequestsCount$ = interval(5000).pipe(
      switchMap(() => this.dataService.getPendingRequestsCount())
    );
  }

}
