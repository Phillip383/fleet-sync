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
  protected years = [2026, 2027];

  selectedMonth = signal(this.currentDate.getMonth());
  selectedYear = signal(this.currentDate.getFullYear());

  getNumDays(month: number, year: number): number {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    return lastDay.getDate();
  }

  getFirstDayOffset(month: number, year: number): number {
    return new Date(year, month, 1).getDay();
  }

  shiftYear(value: number) {
    this.selectedYear.update(year => year + value);
  }

  shiftMonth(value: number) {
    this.selectedMonth.update(month => {
      if(month + value > 11) {
        return 0;
      }
      return month + value }
    );
  }

}
