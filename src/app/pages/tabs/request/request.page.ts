import { Component, OnInit } from '@angular/core';
import { DataService, MaintenanceReq } from 'src/app/services/data.service';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
  maintenanceReqs: MaintenanceReq[] = [];
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
    },
    {
      text: 'Delete',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  ngOnInit() {}

  constructor(private dataService: DataService, private alertController: AlertController) {
    this.dataService.getMaintenanceReqs().subscribe(res => {
      this.maintenanceReqs = res;
    })
  }

  async deleteRequest(maintenanceReq: MaintenanceReq) {
    const alert = await this.alertController.create({
      header: 'Delete Request?',
      message: 'Are you sure you want to delete this request?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.dataService.deleteMaintenanceReq(maintenanceReq);
          },
        },
      ],
    });

    await alert.present();
  }

  updateRequest(maintenanceReq: MaintenanceReq) {
    maintenanceReq.pending = !maintenanceReq.pending;
    this.dataService.updateMaintenanceReq(maintenanceReq);
  }
}


