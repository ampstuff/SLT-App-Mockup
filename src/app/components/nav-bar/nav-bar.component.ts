import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [ CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isCollapsed = false;
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
