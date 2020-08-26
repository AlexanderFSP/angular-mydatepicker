import {IMyDate} from "./my-date.interface";
import {IMyMarkedDate} from "./my-marked-date.interface";

export interface IMyCalendarDay {
  dateObj: IMyDate;
  cmo: number;
  currDay: boolean;
  disabled: boolean | { disabledRangeBegin?: boolean, disabledRangeEnd?: boolean; disabledRange: boolean };
  markedDate: IMyMarkedDate;
  highlight: boolean;
  range?: boolean;
  row?: number;
  col?: number
}
