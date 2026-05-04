import { Component } from '@angular/core';
import { CalendarComp } from '../../../calendar/components/calendar-comp/calendar-comp';
/**
 *
 * The main hub for users of the app. The operations the user can access will be in a list in this component.
 * A calendar is also present in this component, so users can see scheduled services and available service slots.
 * The operations are role context aware. A mechanic's service role can not be accessed by an operator, and an admins inventory operations, or
 *  fleet constant's like service intervals for mileage can not be accessed outside of the admin role.
 */
@Component({
  selector: 'app-dashboard-comp',
  imports: [CalendarComp],
  templateUrl: './dashboard-comp.html',
  styleUrl: './dashboard-comp.scss',
})
export class DashboardComp {}
