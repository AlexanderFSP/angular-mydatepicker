import {Injectable} from "@angular/core";
import {IMyLocales} from "../interfaces/my-locale.interface";
import {IMyOptions} from "../interfaces/my-options.interface";

import {DEFAULT_LOCALE} from "../constants/constants";

@Injectable()
export class LocaleService {
  private locales: IMyLocales = {
    "en": {
      dayLabels: {su: "Sun", mo: "Mon", tu: "Tue", we: "Wed", th: "Thu", fr: "Fri", sa: "Sat"},
      monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec" },
      dateFormat: "mm/dd/yyyy",
      firstDayOfWeek: "mo",
      sunHighlight: true,
    },
    "ru": {
      dayLabels: {su: "Вс", mo: "Пн", tu: "Вт", we: "Ср", th: "Чт", fr: "Пт", sa: "Сб"},
      monthLabels: {
        1: 'Январь',
        2: 'Февраль',
        3: 'Март',
        4: 'Апрель',
        5: 'Май',
        6: 'Июнь',
        7: 'Июль',
        8: 'Август',
        9: 'Сентябрь',
        10: 'Октябрь',
        11: 'Ноябрь',
        12: 'Декабрь',
      },
      dateFormat: "dd.mm.yyyy",
      firstDayOfWeek: "mo",
      sunHighlight: false
    }
  };

  getLocaleOptions(locale: string): IMyOptions {
    if (locale && this.locales.hasOwnProperty(locale)) {
      // User given locale
      return this.locales[locale];
    }
    // Default: en
    return this.locales[DEFAULT_LOCALE];
  }
}
