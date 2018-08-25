import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'ngx-password',
  templateUrl: 'ngx-password.component.html'
})

export class NgxPasswordComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() controlName: string;
  @Input() placeholder: string;
  @Input() class: string;
  @Input() id: string;

  @Output() changeEmit: EventEmitter<any> = new EventEmitter<any>();


  constructor() {
  }

  ngOnInit() {
  }

  change(ev: any) {
    this.changeEmit.emit(ev);
  }
}
