import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CreateGoalComponent } from './pages/create-goal/create-goal.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path:'login', component: LoginComponent},
    {path:'create', component: CreateGoalComponent},
    {path:'dashboard', component: DashboardComponent},
];
