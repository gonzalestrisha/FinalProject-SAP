import { Injectable } from '@angular/core';
import { collectionData } from '@angular/fire/firestore'
import { Firestore, collection } from 'firebase/firestore';
// @Injectable({
//   providedIn: 'root'
// })
export class DataService {
  
  constructor(private firestore: Firestore) { }

  getReq() {
    const maintRef = collection(this.firestore, 'maintenanceReq');
    return collectionData(maintRef)
  }
}