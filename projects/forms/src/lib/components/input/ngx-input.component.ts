import {ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'ngx-input',
  templateUrl: 'ngx-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxInputComponent),
      multi: true
    }
  ]
})

export class NgxInputComponent implements OnChanges, ControlValueAccessor {

  @Input() placeholder: string;
  @Input() prefix: string;
  @Input() suffix: string;
  @Input() type: string;
  @Input() controlName: string;
  @Input() id: string;
  @Input() value: string;
  @Input() form: FormGroup;
  @Input() hint: string;

  @Output() changeEmit: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _ref: ChangeDetectorRef) {
  }

  ngOnChanges() {
  }

  change() {
    this.changeEmit.emit();
    // console.log('inp value', this.value);
    this.valueChanged(this.value);
  }

  registerOnChange(fn: any): void {
    this.valueChanged = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    if (obj !== undefined) {
      this.value = obj;
    }
  }

  valueChanged = (_: any) => {

  };
}
