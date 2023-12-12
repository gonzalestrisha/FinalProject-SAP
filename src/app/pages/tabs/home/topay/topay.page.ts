import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ToastController } from '@ionic/angular';

@Component({
 selector: 'app-topay',
 templateUrl: './topay.page.html',
 styleUrls: ['./topay.page.scss'],
})
export class TopayPage implements OnInit{
    unitNumber!: number;
    billType!: string;
    paymentAmount!: number;
    paymentDate!: number;
  
    constructor(
      private dataService: DataService, 
      private toastController: ToastController) { }
  
    ngOnInit() {
    }
  
  
    async submit() {
      this.dataService.addTransaction({
      unitNumber: this.unitNumber,
      billType: this.billType,
      paymentAmount: this.paymentAmount,
      paymentDate: this.paymentDate,
      });
  
      this.unitNumber = 0;
      this.billType = '';
      this.paymentAmount = 0;
      this.paymentDate = 0;
  
      const toast = await this.toastController.create({
        message: 'Transaction added',
        duration: 2000
      })
  
      toast.present();
    }
  
  }
  


