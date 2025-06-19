import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { UserDisplayComponent } from '../../components/user-display/user-display.component';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';

@Component({
  selector: 'app-create-goal',
  imports: [NavBarComponent, UserDisplayComponent, NgxCountriesDropdownModule],
  templateUrl: './create-goal.component.html',
  styleUrl: './create-goal.component.css'
})
export class CreateGoalComponent {

}
