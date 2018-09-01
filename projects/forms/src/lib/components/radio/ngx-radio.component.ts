import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {logger} from 'codelyzer/util/logger';
import {log} from 'util';

@Component({
  selector: 'ngx-radio',
  templateUrl: 'ngx-radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => NgxRadioComponent)
    }
  ]
})

export class NgxRadioComponent implements OnInit, ControlValueAccessor {

  @Input() form: FormGroup;
  @Input() controlName: string;
  @Input() class: string;
  @Input() value: string;
  @Input() id: string;
  @Input() label: string;
  @Input() labelClass: string;

  @Output() changeEmit: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  change(ev: any) {
    this.changeEmit.emit(ev);
    console.log('radio event', ev);
  }

  registerOnChange(fn: any): void {
    this.propChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
  }

  propChange = (_: any) => {
  }
}
