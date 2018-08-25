import {ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'ngx-input',
  templateUrl: 'ngx-input.component.html'
})

export class NgxInputComponent implements OnChanges {

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
    console.log('input change');
  }
}
