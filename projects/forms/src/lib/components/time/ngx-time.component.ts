import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'ngx-time',
  templateUrl: 'ngx-time.component.html'
})

export class NgxTimeComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() controlName: string;
  @Input() timeFormat: string;
  @Input() id: string;
  @Input() placeholder: string;

  @Output() changeEmit: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }
}
