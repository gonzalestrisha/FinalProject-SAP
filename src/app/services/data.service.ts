import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



/*meron na to */
export interface MaintenanceReq {
  id?: string;
  unitNumber: number;
  type: string;
  message: string;
  dateOfRequest: string;
  pending: boolean;
}

export interface units {
  id?: string;
  totalTenants: number;
  occupied: boolean;
}


export interface payments {
  id?: string;
  dueDayPerMonth: number;
  numOfUnits: number;
  rentAmountPerUnit: number;
}


export interface Transaction {
  id?: string;
  unitNumber: number;
  billType: 'water' | 'rent' | 'current';
  paymentAmount: number;
  paymentDate: string;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) {}

  getMaintenanceReqs(): Observable<MaintenanceReq[]> {
    const maintenanceReqRef = collection(this.firestore, 'maintenanceReq');
    return collectionData(maintenanceReqRef, {idField: 'id'}) as Observable<MaintenanceReq[]>;
  } 

  getMaintenanceReqById(id: string): Observable<MaintenanceReq> {
    const maintenanceReqRef = doc(this.firestore, `maintenanceReq/${id}`);
    return docData(maintenanceReqRef, {idField: 'id'}) as Observable<MaintenanceReq>;
  }

  addMaintenanceReq(maintenanceReq: MaintenanceReq) {
    const maintenanceReqRef = collection(this.firestore, 'maintenanceReq');
    return addDoc(maintenanceReqRef, maintenanceReq);
  }

  deleteMaintenanceReq(maintenanceReq: MaintenanceReq) {
    const maintenanceReqRef = doc(this.firestore, `maintenanceReq/${maintenanceReq.id}`);
    return deleteDoc(maintenanceReqRef);
  }

  updateMaintenanceReq(maintenanceReq: MaintenanceReq) {
    const maintenanceReqRef = doc(this.firestore, `maintenanceReq/${maintenanceReq.id}`);
    return updateDoc(maintenanceReqRef, 
      {
        unitNumber: maintenanceReq.unitNumber,
        dateOfRequest: maintenanceReq.dateOfRequest,
        type: maintenanceReq.type,
        message: maintenanceReq.message,
        pending: maintenanceReq.pending
      }
    );
  }



  getTransactions(): Observable<Transaction[]> {
    const transactionsRef = collection(this.firestore, 'transactions');
    return collectionData(transactionsRef, { idField: 'id' }) as Observable<Transaction[]>;
  }

  getTransactionById(id: string): Observable<Transaction> {
    const transactionsRef = doc(this.firestore, `transactions/${id}`);
    return docData(transactionsRef, { idField: 'id' }) as Observable<Transaction>;
  }

  addTransaction(transactions: Transaction) {
    const transactionsRef = collection(this.firestore, 'transactions');
    return addDoc(transactionsRef, transactions);
  }

  deleteTransaction(transactions: Transaction) {
    const transactionsRef = doc(this.firestore, `transactions/${transactions.id}`);
    return deleteDoc(transactionsRef);
  }

}

