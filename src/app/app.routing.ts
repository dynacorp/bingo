import { AdminLayoutComponent } from './layout/admin/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';


export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full'
  }, {
    path: '',
    component: LoginComponent
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
},  {
  path: '',
  loadChildren: './admin/admin.module#AdminModule'
},  {
  path: '',
  loadChildren: './customers/customers.module#CustomersModule'
}
    ]
  }
];

