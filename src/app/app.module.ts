import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LienHeComponent } from './lien-he/lien-he.component';
import { RouterModule, Routes } from '@angular/router';
import { GioTauGiaVeComponent } from './gio-tau-gia-ve/gio-tau-gia-ve.component';
import { SharedService } from './shared.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { KiemtraveComponent } from './kiemtrave/kiemtrave.component';
import { DoichuyenComponent } from './kiemtrave/doichuyen/doichuyen.component';
import { HoanveComponent } from './kiemtrave/hoanve/hoanve.component';
import { KqktraveComponent } from './kiemtrave/kqktrave/kqktrave.component';
import { KtrakhuyenmaiComponent } from './ktrakhuyenmai/ktrakhuyenmai.component';
import { XndoichuyenComponent } from './kiemtrave/doichuyen/xndoichuyen/xndoichuyen.component';
import { ThongtindatchoComponent } from './thongtindatcho/thongtindatcho.component';
import { MuaveComponent } from './muave/muave.component';
import { TimveComponent } from './timve/timve.component';
import { HomeComponent } from './home/home.component';
import { QuydinhComponent } from './quydinh/quydinh.component';
import { HuongdanComponent } from './huongdan/huongdan.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TestVPNComponent } from './test-vpn/test-vpn.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:'/LienHe', component :LienHeComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LienHeComponent,
    GioTauGiaVeComponent,
    KiemtraveComponent,
    DoichuyenComponent,
    HoanveComponent,
    KqktraveComponent,
    KtrakhuyenmaiComponent,
    XndoichuyenComponent,
    ThongtindatchoComponent,
    MuaveComponent,
    TimveComponent,
    HomeComponent,
    QuydinhComponent,
    HuongdanComponent,
    SearchBarComponent,
    TestVPNComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
