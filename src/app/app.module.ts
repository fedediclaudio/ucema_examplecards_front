import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { InfoComponent } from './user-info/info/info.component';
import { CardsComponent } from './user-info/cards/cards.component';
import { CardInfoComponent } from './user-info/cards/card-info/card-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { UserPurchasesComponent } from './user-purchases/user-purchases.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SectionAComponent } from './user-purchases/section-a/section-a.component';
import { SectionBComponent } from './user-purchases/section-b/section-b.component';
import { CardDetailComponent } from './card-detail/card-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserInfoComponent,
    InfoComponent,
    CardsComponent,
    CardInfoComponent,
    UserPurchasesComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent,
    SectionAComponent,
    SectionBComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
