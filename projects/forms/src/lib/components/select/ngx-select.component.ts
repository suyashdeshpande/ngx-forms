import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {FormField} from '../../interface/interface';

@Component({
  selector: 'ngx-select',
  templateUrl: 'ngx-select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxSelectComponent),
      multi: true
    }
  ]
})

export class NgxSelectComponent implements OnInit, ControlValueAccessor {

  @Input() placeholder: string;
  @Input() prefix: string;
  @Input() suffix: string;
  @Input() controlName: string;
  @Input() id: string;
  @Input() value: string;
  @Input() form: FormGroup;
  @Input() hint: string;
  @Input() options: any[];
  @Input() canAdd: boolean;
  @Input() closeOnSelect: boolean;

  @Output() selectChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelectEvent(ev: any) {
    this.propChange(ev);

    this.selectChange.emit(ev);
    console.log('on select event select', ev );
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
    this.propChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
  }

  propChange = (_: any) => {
  };
}
