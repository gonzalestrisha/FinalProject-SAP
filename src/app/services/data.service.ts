import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, updateDoc, query, where } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface MaintenanceReq {
  id?: string;
  unitNumber: number;
  dateOfRequest: string;
  type: string;
  pending: boolean;
}

export interface units {
  id?: string;
  totalTenants: number;
  occupied: boolean;
}

interface Payment{
  id?: string;
  unit: number;
  type: string;
  paidMonth: string;
  amount: number;
  dateOfPayment: string;
}

export interface payments {
  id?: string;
  dueDayPerMonth: number;
  numOfUnits: number;
  rentAmountPerUnit: number;
}

export interface transactions {
  id?: string;
  unit: number;
  type: string;
  paidMonth: string;
  amount: number;
  dateOfPayment: string;
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
        pending: maintenanceReq.pending
      });
  }

  countPendingRequests(): Observable<number> {
    const maintenanceReqRef = collection(this.firestore, 'maintenanceReq');
    return collectionData(maintenanceReqRef, {idField: 'id'}).pipe(
       map(requests => requests.filter(req => pending).length)
    );
   }

   getTotalIncome(): Observable<number> {
    const paymentsRef = collection(this.firestore, 'payments');
    return collectionData(paymentsRef, {idField: 'id'}).pipe(
        map((payments: Payment[]) => payments.reduce((acc, payment) => acc + payment.amount, 0))
    );
    }
}
