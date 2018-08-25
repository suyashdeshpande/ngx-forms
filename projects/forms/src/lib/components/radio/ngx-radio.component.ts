import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'ngx-radio',
  templateUrl: 'ngx-radio.component.html'
})

export class NgxRadioComponent implements OnInit {

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
  }
}
