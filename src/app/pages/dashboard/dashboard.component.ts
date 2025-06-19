import { Component, HostListener, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { UserDisplayComponent } from '../../components/user-display/user-display.component';
import { GoalsTimelineComponent } from '../../components/goals-timeline/goals-timeline.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [NavBarComponent, UserDisplayComponent, GoalsTimelineComponent, CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router) { }
  tableHide = false;
  kanbanHide = true;
  timelineHide = false;
  public openDropdown: number | null = null;
  @ViewChildren('dropdownMenu') dropdownMenus!: QueryList<ElementRef>;

  toggleTableVisibility() {
    this.tableHide = true;
    this.kanbanHide = false;
    this.timelineHide = false;
  }
  toggleKanbanVisibility() {
    this.kanbanHide = true;
    this.tableHide = false;
    this.timelineHide = false;
  }

  toggleTimelineVisibility() {
    this.timelineHide = true;
    this.kanbanHide = false;
    this.tableHide = false;
  }

  goToCreateGoal() {
    this.router.navigate(['/create']);
  }

  // Table Checkboxes
  checkedRows: boolean[] = [false, false];
  allChecked = false;
  toggleAllCheckboxes() {
    this.checkedRows = this.checkedRows.map(() => this.allChecked);
  }

  toggleDropdown(event: MouseEvent, rowIndex: number): void {
    event.stopPropagation(); // Prevents the document click listener from firing immediately
    if (this.openDropdown === rowIndex) {
      this.openDropdown = null;
    } else {
      this.openDropdown = rowIndex;
    }
  }

  /**
   * Listens for clicks on the document to close the dropdown.
   * @param event The click event.
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (this.openDropdown !== null) {
      // Find the specific dropdown menu element that is open
      const openDropdownElement = this.dropdownMenus.toArray()[this.openDropdown];
      if (openDropdownElement && !openDropdownElement.nativeElement.contains(event.target)) {
        this.openDropdown = null; // Close the dropdown if the click is outside
      }
    }
  }

  viewItem(rowIndex: number): void {
    console.log(`Viewing item at row index: ${rowIndex}`);
    this.openDropdown = null; // Close dropdown after action
  }

  /**
   * Placeholder for the "Edit" action.
   * @param rowIndex The index of the item to edit.
   */
  editItem(rowIndex: number): void {
    console.log(`Editing item at row index: ${rowIndex}`);
    this.openDropdown = null; // Close dropdown after action
  }
}
