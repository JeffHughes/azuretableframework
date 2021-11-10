import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { KanbanModule } from '@syncfusion/ej2-angular-kanban';

import { AppComponent } from './app.component';
import { KanbanComponent } from './kanban/kanban.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet';

const firebaseConfig = {

  authDomain: 'xxxxxxx',
  projectId: 'xxxxxxx',
  storageBucket: 'xxxxxxxxxxxx',


};

@NgModule({
  declarations: [AppComponent, KanbanComponent, LoginComponent],
  imports: [
    BrowserModule,
    KanbanModule,
    ButtonModule,
    SpreadsheetAllModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}