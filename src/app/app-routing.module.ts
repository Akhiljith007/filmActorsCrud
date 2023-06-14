import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcontactsComponent } from './allcontacts/allcontacts.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [

  {path:'',component:AllcontactsComponent},
{path:'add',component:AddComponent},

{path:'update/:id',component:UpdateComponent},
{path:'view/:id',component:ViewComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
