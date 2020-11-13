import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { NameEditorComponent } from './name-editor/name-editor.component';
// import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InventoryService } from './inventory.service';
import { NewInventoryFormComponent } from './new-inventory-form/new-inventory-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { MatMenuModule  } from '@angular/material/menu';
import { MatIconModule   } from '@angular/material/icon';
import { Routes, RouterModule } from '@angular/router';
import { ListInventoryComponent } from './list-inventory/list-inventory.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [ {
  path: '',                     //default component to display
   component: ListInventoryComponent
 },       {
   path: 'addInventory',         //when inventory added 
   component: NewInventoryFormComponent
 },       {
   path: 'listInventory',       //when inventory listed
   component: ListInventoryComponent
 },       {
   path: '**',                 //when path cannot be found
   component: NotFoundComponent
 }
];

@NgModule({
  declarations: [AppComponent, NewInventoryFormComponent, NavigationMenuComponent, ListInventoryComponent, NotFoundComponent], //NameEditorComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
