import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";

import {CalendarComponent} from "./components/calendar/calendar.component";
import {SelectionBarComponent} from "./components/selection-bar/selection-bar.component";
import {DayViewComponent} from "./components/day-view/day-view.component";

import {AngularMyDatePickerDirective} from "./angular-mydatepicker.input";
import {AngularMyDatePickerCalendarDirective} from "./directives/angular-mydatepicker-calendar.directive";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    CalendarComponent,
    SelectionBarComponent,
    DayViewComponent,
    AngularMyDatePickerDirective,
    AngularMyDatePickerCalendarDirective
  ],
  entryComponents: [CalendarComponent],
  exports: [
    CalendarComponent,
    SelectionBarComponent,
    DayViewComponent,
    AngularMyDatePickerDirective,
    AngularMyDatePickerCalendarDirective
  ]
})
export class AngularMyDatePickerModule { }
