import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'ngx-checkbox',
  templateUrl: 'ngx-checkbox.component.html'
})

export class NgxCheckboxComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() controlName: string;
  @Input() checked: boolean;
  @Input() value: string;
  @Input() id: string;
  @Input() class: string;
  @Input() label: string;
  @Input() labelClass: string;

  @Output() changeEmit: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  change(ev: any) {
    this.changeEmit.emit(ev);
  }
}
