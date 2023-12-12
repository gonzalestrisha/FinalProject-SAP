import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.page.html',
  styleUrls: ['./maintenance.page.scss'],
})
export class MaintenancePage implements OnInit {
  unitNumber!: number;
  type!: string;
  message!: string;
  today = new Date().toISOString().slice(0, 10);

  constructor(
    private dataService: DataService, 
    private toastController: ToastController) { }

  ngOnInit() {
  }

  
  async addRequest() {
    this.dataService.addMaintenanceReq({
      unitNumber: this.unitNumber,
      type: this.type,
      message: this.message,
      dateOfRequest: this.today,
      pending: true
    });

    this.unitNumber = 0;
    this.type = '';
    this.message = '';

    const toast = await this.toastController.create({
      message: 'Request Added',
      duration: 2000
    })

    toast.present();
  }

}
