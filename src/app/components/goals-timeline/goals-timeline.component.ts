import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
 
// Define the interface for a single goal
export interface Goal {
  status: 'IN PROGRESS' | 'COMPLETED' | 'TO DO' | 'IN REVIEW';
  title: string;
  impact: string;
  owner: string;
  priority: 'Low' | 'Medium' | 'High';
  startDate: Date;
  endDate: Date;
}
 
@Component({
  selector: 'app-goals-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './goals-timeline.component.html',
  styleUrls: ['./goals-timeline.component.css']
})
export class GoalsTimelineComponent implements OnInit {
  // --- TIMELINE CONFIGURATION ---
  timelineStartDate: Date = new Date('2025-06-01');
  timelineEndDate: Date = new Date('2026-04-30');
  months: { name: string; weeks: number[] }[] = [];
  totalDays: number = 0;
 
  // --- GOALS DATA ---
  goals: Goal[] = [
    {
      status: 'COMPLETED',
      title: 'ANZ Market Expansion Strategy - Drive operations',
      impact: '$ Impact: 50M CAD',
      owner: 'Sarah Johnson',
      priority: 'Low',
      startDate: new Date('2025-06-09'),
      endDate: new Date('2025-09-05'),
    },
    {
      status: 'IN PROGRESS',
      title: 'ANZ Market Expansion Strategy - Drive operations',
      impact: '$ Impact: 50M CAD',
      owner: 'Sarah Johnson',
      priority: 'Medium',
      startDate: new Date('2025-07-01'),
      endDate: new Date('2025-11-20'),
    },
    {
      status: 'TO DO',
      title: 'New Product Line Feasibility Study',
      impact: '$ Impact: 75M CAD',
      owner: 'Ryan Gatwick',
      priority: 'Medium',
      startDate: new Date('2025-08-22'),
      endDate: new Date('2025-11-30'),
    },
    {
      status: 'IN REVIEW',
      title: 'Q2 Marketing Campaign Review',
      impact: '$ Impact: 20M CAD',
      owner: 'Sarah Johnson',
      priority: 'Medium',
      startDate: new Date('2025-12-22'),
      endDate: new Date('2025-03-01'),
    },
  ];
 
  currentMonthIndex: number | undefined;

  ngOnInit(): void {
    this.totalDays = this.dayDiff(this.timelineStartDate, this.timelineEndDate);
    this.months = this.generateMonths();
    this.currentMonthIndex = this.getCurrentMonthIndex();

  }
 
  // --- HELPERS FOR DYNAMIC STYLES ---
 
  /**
   * Calculates the left offset and width for a goal bar
   * based on its start/end dates relative to the timeline.
   */
  getGoalStyle(goal: Goal): { [key: string]: string } {
    const leftOffset = this.dayDiff(this.timelineStartDate, goal.startDate);
    const duration = this.dayDiff(goal.startDate, goal.endDate);
 
    const leftPercentage = (leftOffset / this.totalDays) * 100;
    const widthPercentage = (duration / this.totalDays) * 100;
 
    return {
      'left': `calc(${leftPercentage}% + 100px)`, // Add 100px to offset status column
      'width': `${widthPercentage}%`
    };
  }
 
  /**
   * Returns Tailwind CSS classes based on the goal's status.
   */
  getStatusClasses(status: Goal['status']): string {
    switch (status) {
      case 'IN PROGRESS':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'COMPLETED':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'TO DO':
        return 'bg-gray-100 text-gray-800 border-gray-300';
      case 'IN REVIEW':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }
  /**
   * Returns Tailwind CSS classes for the priority lozenge.
   */
  getPriorityClasses(priority: Goal['priority']): string {
       switch (priority) {
          case 'Low':
              return 'bg-yellow-200 text-yellow-800';
          case 'Medium':
              return 'bg-orange-200 text-orange-800';
          case 'High':
              return 'bg-red-200 text-red-800';
          default:
              return 'bg-gray-200 text-gray-800';
       }
  }
 
 
  // --- HELPERS FOR DATE CALCULATIONS ---
 
  private dayDiff(startDate: Date, endDate: Date): number {
    return Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  }
 
  private generateMonths(): { name: string; weeks: number[] }[] {
    const months = [];
    let currentDate = new Date(this.timelineStartDate);
    while (currentDate <= this.timelineEndDate) {
      const monthName = currentDate.toLocaleString('default', { month: 'short' }).toUpperCase();
      const weeks = this.getWeeksInMonth(currentDate);
      months.push({ name: monthName, weeks });
      currentDate.setMonth(currentDate.getMonth() + 1);
    }
    return months;
  }
  private getWeeksInMonth(date: Date): number[] {
    // This is a simplified representation of weeks, matching the PDF.
    // In a real-world scenario, you might want more precise date markings.
    return [2, 9, 16, 23]; 
  }

  /** Returns the index of the current month in the timeline, or undefined if not in range */
  getCurrentMonthIndex(): number | undefined {
    const now = new Date();
    for (let i = 0; i < this.months.length; i++) {
      const monthDate = new Date(this.timelineStartDate);
      monthDate.setMonth(this.timelineStartDate.getMonth() + i);
      if (
        now.getFullYear() === monthDate.getFullYear() &&
        now.getMonth() === monthDate.getMonth()
      ) {
        return i;
      }
    }
    return undefined;
  }
}