import { Component } from '@angular/core';
import { CalendarComp } from '../../../calendar/components/calendar-comp/calendar-comp';

@Component({
  selector: 'app-dashboard-comp',
  imports: [CalendarComp],
  templateUrl: './dashboard-comp.html',
  styleUrl: './dashboard-comp.scss',
})
export class DashboardComp {}
