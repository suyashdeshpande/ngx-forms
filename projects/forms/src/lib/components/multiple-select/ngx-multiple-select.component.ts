import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'ngx-multiple-select',
  templateUrl: 'ngx-multiple-select.component.html'
})

export class NgxMultipleSelectComponent implements OnInit {

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
  @Input() multiple: boolean;

  @Output() selectChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelectEvent(ev: any) {
    this.selectChange.emit(ev);
  }
}
