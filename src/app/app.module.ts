import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyCtcBsWwWZjhI2bd9_ywJ62XGz2ZtNQpj0",
      authDomain: "project-sap-3ec10.firebaseapp.com",
      databaseURL: "https://project-sap-3ec10-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "project-sap-3ec10",
      storageBucket: "project-sap-3ec10.appspot.com",
      messagingSenderId: "1008196345005",
      appId: "1:1008196345005:web:2a4de4c8e112d46042fa24",
      measurementId: "G-9W51KV5VL4"
    })),
    provideFirestore(() => getFirestore()),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
