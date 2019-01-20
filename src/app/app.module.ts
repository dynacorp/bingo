import { SidebarModule } from './shared/sidebar/sidebar.module';
import { AppRoutes } from './app.routing';
import { AdminLayoutComponent } from './layout/admin/admin-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { LoginComponent } from './login/login.component';

@NgModule({
// Anytime you create a page it will automatically add the component here.. Make sure you delete it
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutes, { useHash: true }),
    SidebarModule,
    FooterModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
