import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//COMPONENTES
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { CrudComponent } from './pages/crud/crud.component';
import { CreateComponent } from './pages/crud/create/create.component';
import { ReadComponent } from './pages/crud/read/read.component';
import { UpdateComponent } from './pages/crud/update/update.component';
import { DeleteComponent } from './pages/crud/delete/delete.component';
import { HeaderComponent } from './pages/header/header.component';
// import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CrudComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
