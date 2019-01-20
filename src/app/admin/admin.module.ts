import { AdminComponent } from './admin.component';
import { AdminRoutes } from './admin.routing';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminRoutes),
    ],
    declarations: [AdminComponent]
})

export class AdminModule {}
