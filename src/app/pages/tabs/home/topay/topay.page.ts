import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ToastController } from '@ionic/angular';

@Component({
 selector: 'app-topay',
 templateUrl: './topay.page.html',
 styleUrls: ['./topay.page.scss'],
})
export class TopayPage {

 unitNumber: any;
 billType: any;
 paymentAmount: any;
 paymentDate: any;

 constructor(private dataService: DataService, private toastController: ToastController) {
    this.unitNumber = '0';
    this.billType = '0';
    this.paymentAmount = '0';
    this.paymentDate = '0';
 }

 updateUnitNumber() {
    switch (this.unitNumber) {
      case 'unit1': this.unitNumber = '1'; break;
      case 'unit2': this.unitNumber = '2'; break;
      case 'unit3': this.unitNumber = '3'; break;
      case 'unit4': this.unitNumber = '4'; break;
      case 'unit5': this.unitNumber = '5'; break;
      case 'unit6': this.unitNumber = '6'; break;
      default: this.unitNumber = '0'; break;
    }
 }

 updateBillType() {
    switch (this.billType) {
      case 'rent': this.paymentAmount = ''; break;
      case 'water': this.paymentAmount = ''; break;
      case 'electric': this.paymentAmount = ''; break;
      default: this.paymentAmount = ''; break;
    }
 }

 async submit() {
    try {
      await this.dataService.addTransaction({
        unitNumber: this.unitNumber,
        billType: this.billType,
        paymentAmount: this.paymentAmount,
        paymentDate: this.paymentDate
      });

      this.unitNumber = '0';
      this.billType = '0';
      this.paymentAmount = '0';
      this.paymentDate = '0';

      const toast = await this.toastController.create({
        message: 'Paid',
        duration: 1000
      });
      toast.present();
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
 }
}