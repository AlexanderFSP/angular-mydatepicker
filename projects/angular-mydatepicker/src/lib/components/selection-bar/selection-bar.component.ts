import {Component, EventEmitter, Input, OnChanges, Output, ViewEncapsulation, SimpleChanges} from "@angular/core";
import {IMyMonth} from "../../interfaces/my-month.interface";
import {IMyOptions} from "../../interfaces/my-options.interface";
import {OPTS, VISIBLE_MONTH, PREV_VIEW_DISABLED, NEXT_VIEW_DISABLED} from "../../constants/constants"

@Component({
  selector: "lib-selection-bar",
  templateUrl: "./selection-bar.component.html",
  encapsulation: ViewEncapsulation.None
})
export class SelectionBarComponent implements OnChanges {
  @Input() opts: IMyOptions;
  @Input() visibleMonth: IMyMonth;
  @Input() prevViewDisabled: boolean;
  @Input() nextViewDisabled: boolean;

  @Output() prevNavigateBtnClicked = new EventEmitter<void>();
  @Output() nextNavigateBtnClicked = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty(OPTS)) {
      this.opts = changes[OPTS].currentValue;
    }
    if (changes.hasOwnProperty(VISIBLE_MONTH)) {
      this.visibleMonth = changes[VISIBLE_MONTH].currentValue;
    }
    if (changes.hasOwnProperty(PREV_VIEW_DISABLED)) {
      this.prevViewDisabled = changes[PREV_VIEW_DISABLED].currentValue;
    }
    if (changes.hasOwnProperty(NEXT_VIEW_DISABLED)) {
      this.nextViewDisabled = changes[NEXT_VIEW_DISABLED].currentValue;
    }
  }

  onPrevNavigateBtnClicked(event: any) {
    event.stopPropagation();
    this.opts.rtl ? this.nextNavigateBtnClicked.emit() : this.prevNavigateBtnClicked.emit();
  }

  onNextNavigateBtnClicked(event: any) {
    event.stopPropagation();
    this.opts.rtl ? this.prevNavigateBtnClicked.emit() : this.nextNavigateBtnClicked.emit();
  }
}
