import { CustomersRoutes } from './customers.routing';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(CustomersRoutes),
    ],
    declarations: [CustomersComponent]
})

export class CustomersModule {}
