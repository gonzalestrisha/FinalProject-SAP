import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, updateDoc, where, query, getDocs } from '@angular/fire/firestore';
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
paymentDate: any;
  id?: string;
  unitNumber: number;
  billType: string;
  paymentAmount: number;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) {}

  getPayment(): Observable<payments[]> {
    const paymentsRef = collection(this.firestore, 'payments');
    return collectionData(paymentsRef, { idField: 'id'}) as Observable<payments[]>;
  }

  getPaymentById(id: string): Observable<payments> {
    const paymentsRef = doc(this.firestore, 'payments/${id}');
    return docData(paymentsRef, { idField: 'id' }) as Observable<payments>;
  }

  addPayment(payment:payments) {
    const paymentsRef = collection(this.firestore, 'payments');
    return addDoc(paymentsRef, payment);
  }

  deletePayment(payment:payments) {
    const paymentsRef = doc(this.firestore, `payment/${payment.id}`);
    return deleteDoc(paymentsRef);
  }

  updatePayment(payment:payments) {
    const paymentsRef = doc(this.firestore, `payment/${payment.id}`);
    return updateDoc(paymentsRef, 
      { 
        dueDayPerMonth: payment.dueDayPerMonth,
        numOfUnits: payment.numOfUnits,
        rentAmountPerUnit: payment.rentAmountPerUnit,
      }
    );
  }


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

  async getPendingRequestsCount(): Promise<number> {
    const maintenanceReqRef = collection(this.firestore, 'maintenanceReq');
    const q = query(maintenanceReqRef, where('pending', '==', true));

    const querySnapshot = await getDocs(q);
    return querySnapshot.size;
  }

  
  // transactions

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





