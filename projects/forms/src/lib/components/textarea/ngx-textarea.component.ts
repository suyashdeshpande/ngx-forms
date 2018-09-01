import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'ngx-textarea',
  templateUrl: 'ngx-textarea.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => NgxTextAreaComponent)
    }
  ]
})

export class NgxTextAreaComponent implements OnInit, ControlValueAccessor {

  @Input() placeholder: string;
  @Input() controlName: string;
  @Input() id: string;
  @Input() form: FormGroup;
  @Input() value: string;

  @Output() changeEmit: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  change(ev: any) {
    console.log('text area value', this.value);
    this.changeEmit.emit(ev);
    this.propChange(ev);
  }

  registerOnChange(fn: any): void {
    this.propChange = fn;
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
  propChange = (_: any) => {
  }
}
