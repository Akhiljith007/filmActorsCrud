import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { AllcontactsComponent } from './allcontacts/allcontacts.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PipePipe } from './pipes/pipe.pipe';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { SortPipe } from './pipes/sort.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    AllcontactsComponent,
    FooterComponent,
    HeaderComponent,
    PipePipe,
    UpdateComponent,
    ViewComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass:"toast-top-center"})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
