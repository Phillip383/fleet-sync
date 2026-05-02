import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-calendar-comp',
  imports: [],
  templateUrl: './calendar-comp.html',
  styleUrl: './calendar-comp.scss',
})
export class CalendarComp {

  protected currentDate = new Date();
  protected months = new Map<number, string>([[0, 'January'], [1, 'February'], [2, 'March'], [3, 'April'], [4, 'May'], [5, 'June'], [6, 'July'], [7, 'August'], [8, 'September'], [9, 'October'], [10, 'November'], [11, 'December']]);
  protected years = [this.currentDate.getFullYear(), this.currentDate.getFullYear() + 1];
  protected daysOfMonth: number[] = new Array<number>();

  selectedMonth = signal(this.currentDate.getMonth());
  selectedYear = signal(this.currentDate.getFullYear());

  getNumDays(month: number, year: number): number[] {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    return Array.from({length: lastDay.getDate()}, (_, i) => i + 1);
  }

  getFirstDayOffset(month: number, year: number): number {
    return new Date(year, month, 1).getDay();
  }

  toggleMonths() {
    const div = document.getElementById('month-list-container');
    if (div) {
      div.style.visibility = div.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }else {
      console.log('div is null');
    }
  }

  toggleYears() {
    const div = document.getElementById('year-list-container');
    if (div) {
      div.style.visibility = div.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }else {
      console.log('div is null');
    }
  }

  selectMonth(month: number) {
    this.selectedMonth.set(month);
    this.daysOfMonth = this.getNumDays(month, this.selectedYear());
    this.toggleMonths();
  }

  selectYear(year: number) {
    this.selectedYear.set(year);
    this.toggleYears();
  }

}
