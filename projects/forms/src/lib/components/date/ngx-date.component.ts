import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'ngx-date',
  templateUrl: 'ngx-date.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxDateComponent),
      multi: true
    }
  ]
})

export class NgxDateComponent implements OnInit, ControlValueAccessor {

  @Input() form: FormGroup;
  @Input() controlName: string;
  @Input() dateFormat: string;
  @Input() id: string;
  @Input() placeholder: string;

  @Output() changeEmit: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  change(ev: any) {
    // console.log('date changed event', ev);
    this.changeEmit.emit(ev.target.value);
    this.propChange(ev.target.value);
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
  }
}
