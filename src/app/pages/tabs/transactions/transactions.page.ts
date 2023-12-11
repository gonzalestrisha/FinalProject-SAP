import { Component, OnInit } from '@angular/core';
import { DataService, Transaction } from 'src/app/services/data.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {
 transactions: Transaction[] = [];
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
    this.dataService.getTransactions().subscribe(res => {
      this.transactions = res;
    })
  }

  async deleteTransaction(transactions: Transaction) {
    const alert = await this.alertController.create({
      header: 'Delete Transaction',
      message: 'Are you sure you want to delete this transaction?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.dataService.deleteTransaction(transactions);
          },
        },
      ],
    });

    await alert.present();
  }


} 
