import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"best-sk-angular","appId":"1:469821417027:web:d6f06f3cb3defa2ff856f6","storageBucket":"best-sk-angular.appspot.com","apiKey":"AIzaSyA4mUL4xFLxYWXHyHg9H0tmYDPRXvUnBU4","authDomain":"best-sk-angular.firebaseapp.com","messagingSenderId":"469821417027","measurementId":"G-MDHGVEMKHS"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideStorage(() => getStorage()))]
};
