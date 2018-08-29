import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'ngx-textarea',
  templateUrl: 'ngx-textarea.component.html'
})

export class NgxTextAreaComponent implements OnInit {

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
    this.changeEmit.emit(this.value);
  }
}
