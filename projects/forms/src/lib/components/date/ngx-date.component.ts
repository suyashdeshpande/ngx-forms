import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'ngx-date',
  templateUrl: 'ngx-date.component.html'
})

export class NgxDateComponent implements OnInit {

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
    this.changeEmit.emit(ev);
  }
}
