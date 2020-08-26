import {Component, EventEmitter, Input, OnChanges, Output, ViewEncapsulation, SimpleChanges} from "@angular/core";
import {IMyCalendarDay} from "../../interfaces/my-calendar-day.interface";
import {IMyDate} from "../../interfaces/my-date.interface";
import {IMyDateRange} from "../../interfaces/my-date-range.interface";
import {IMyOptions} from "../../interfaces/my-options.interface";
import {IMyWeek} from "../../interfaces/my-week.interface";
import {UtilService} from "../../services/angular-mydatepicker.util.service";
import {KeyCode} from "../../enums/key-code.enum";
import {MonthId} from "../../enums/month-id.enum";
import {OPTS, DATES, WEEK_DAYS, SELECTED_DATE, SELECTED_DATE_RANGE} from "../../constants/constants";

@Component({
  selector: "lib-day-view",
  templateUrl: "./day-view.component.html",
  providers: [UtilService],
  encapsulation: ViewEncapsulation.None
})
export class DayViewComponent implements OnChanges {
  @Input() opts: IMyOptions;
  @Input() dates: Array<IMyWeek>;
  @Input() weekDays: Array<string>;
  @Input() selectedDate: IMyDate;
  @Input() selectedDateRange: IMyDateRange;

  @Output() dayCellClicked = new EventEmitter<IMyCalendarDay>();
  @Output() dayCellKeyDown = new EventEmitter<any>();

  prevMonthId: number = MonthId.prev;
  currMonthId: number = MonthId.curr;
  nextMonthId: number = MonthId.next;

  constructor(private utilService: UtilService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty(OPTS)) {
      this.opts = changes[OPTS].currentValue;
    }
    if (changes.hasOwnProperty(DATES)) {
      this.dates = changes[DATES].currentValue;
    }
    if (changes.hasOwnProperty(WEEK_DAYS)) {
      this.weekDays = changes[WEEK_DAYS].currentValue;
    }
    if (changes.hasOwnProperty(SELECTED_DATE)) {
      this.selectedDate = changes[SELECTED_DATE].currentValue;
    }
    if (changes.hasOwnProperty(SELECTED_DATE_RANGE)) {
      this.selectedDateRange = changes[SELECTED_DATE_RANGE].currentValue;
    }
  }

  onDayCellClicked(event: any, cell: IMyCalendarDay): void {
    event.stopPropagation();

    if (cell.disabled) {
      return;
    }

    this.dayCellClicked.emit(cell);
  }

  onDayCellKeyDown(event: any, cell: IMyCalendarDay): void {
    const keyCode = this.utilService.getKeyCodeFromEvent(event);
    if (keyCode !== KeyCode.tab) {
      event.preventDefault();

      if (keyCode === KeyCode.enter || keyCode === KeyCode.space) {
        this.onDayCellClicked(event, cell);
      } else if (this.opts.moveFocusByArrowKeys) {
        this.dayCellKeyDown.emit(event)
      }
    }
  }

  isDateInRange(date: IMyDate): boolean {
    return this.utilService.isDateInRange(date, this.selectedDateRange);
  }

  isDateSame(date: IMyDate): boolean {
    return this.utilService.isDateSame(this.selectedDate, date);
  }

  isDateRangeBeginOrEndSame(date: IMyDate): boolean {
    return this.utilService.isDateRangeBeginOrEndSame(this.selectedDateRange, date);
  }

  isDateRangeBegin(date: IMyDate): boolean {
    return this.utilService.isDateRangeBegin(this.selectedDateRange, date);
  }

  isDateRangeEnd(date: IMyDate): boolean {
    return this.utilService.isDateRangeEnd(this.selectedDateRange, date);
  }

  isDisabledRangeBegin({ disabled }: IMyCalendarDay): boolean {
    return disabled && typeof disabled === 'object' && disabled.disabledRangeBegin;
  }

  isDisabledRangeEnd({ disabled }: IMyCalendarDay): boolean {
    return disabled && typeof disabled === 'object' && disabled.disabledRangeEnd;
  }

  isDisabledRange({ disabled }: IMyCalendarDay): boolean {
    return disabled && typeof disabled === 'object' && disabled.disabledRange;
  }
}
