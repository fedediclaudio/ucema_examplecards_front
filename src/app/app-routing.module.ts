import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserPurchasesComponent } from './user-purchases/user-purchases.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SectionAComponent } from './user-purchases/section-a/section-a.component';
import { SectionBComponent } from './user-purchases/section-b/section-b.component';
import { CardDetailComponent } from './card-detail/card-detail.component';

const routes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'info', component: UserInfoComponent},
  {path: 'purchases', component: UserPurchasesComponent,
    children: [
      {path: 'section-a', component: SectionAComponent},
      {path: 'section-b', component: SectionBComponent}
    ] },
  {path: 'contact', component: ContactComponent},
  {path: 'card-detail/:id', component: CardDetailComponent},
  {path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ], 
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
