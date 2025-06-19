import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CreateGoalComponent } from "./pages/create-goal/create-goal.component";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GoalsTimelineComponent } from "./components/goals-timeline/goals-timeline.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GoalsTimelineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App';
}
