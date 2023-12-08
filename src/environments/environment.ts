// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCtcBsWwWZjhI2bd9_ywJ62XGz2ZtNQpj0",
    authDomain: "project-sap-3ec10.firebaseapp.com",
    databaseURL: "https://project-sap-3ec10-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "project-sap-3ec10",
    storageBucket: "project-sap-3ec10.appspot.com",
    messagingSenderId: "1008196345005",
    appId: "1:1008196345005:web:2a4de4c8e112d46042fa24",
    measurementId: "G-9W51KV5VL4"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
