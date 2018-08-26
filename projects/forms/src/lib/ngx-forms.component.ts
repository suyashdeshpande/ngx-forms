import {ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NgxFormsService} from './ngx-forms.service';
import {FormField, FormFieldOption, FormValidators} from './interface/interface';
import {CustomValidators} from 'ngx-custom-validators';

@Component({
  selector: 'ngx-forms',
  templateUrl: 'ngx-forms.component.html',
  styleUrls: ['ngx-forms.component.css'],
  providers: []
})
export class NgxFormsComponent implements OnChanges {

  constructor(private _ref: ChangeDetectorRef, public _service: NgxFormsService, private fb: FormBuilder) {
  }

  form: FormGroup;
  Object = Object;
  originalJSON: any;

  @Input() fields: FormField[];
  @Input() formId = Math.random().toString(36).substring(7);
  // @Input() form: FormGroup;

  @Output() onSubmit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() formEvents: EventEmitter<any> = new EventEmitter<any>();


  static parseFields(fields: FormField[], formId: string) {
    let _fields: any[];
    let _fg: any = {};
    _fields = fields.filter((field: FormField) => field.isVisible !== false)
      .map((field: FormField, i: number) => {
        // console.log('map function parse fields', i, field);
        field.id = formId + '-' + i;
        if (field.type === 'image') {
          return;
        }
        if (field.options && (field.type !== 'select' && field.type !== 'multiple-select') && field.type === 'checkbox') {
          field.options = field.options.map((option: FormFieldOption, j: number) => {
            option.id = option.id || (formId + '-' + i + '-' + j);
            if (option.name) {
              _fg = {
                ..._fg,
                [option.name]: new FormControl()
              };
            }
            return option;
          });
        }
        if (field.name) {
          _fg = {
            ..._fg,
            [field.name]: new FormControl({
              value: field.value,
              disabled: field.disabled
            }, NgxFormsComponent.parseValidators(field.validators))
          };
        }
        return field;
      });
    return {
      fields: _fields,
      fg: _fg
    };
  }

  static parseValidators(validators: FormValidators) {
    let _v: any = [];
    for (const v in validators) {
      if (!validators.hasOwnProperty(v)) {
        continue;
      }
      switch (v) {
        case 'minlength':
          _v = [..._v, Validators.minLength(validators[v].value)];
          break;
        case 'maxlength':
          _v = [..._v, Validators.maxLength(validators[v].value)];
          break;
        case 'pattern':
          _v = [..._v, Validators.pattern(validators[v].value)];
          break;
        case 'required':
          _v = [..._v, Validators.required];
          break;
        case 'rangeLength':
          _v = [..._v, CustomValidators.rangeLength(validators[v].value)];
          break;
        case 'min':
          _v = [..._v, CustomValidators.min(validators[v].value)];
          break;
        case 'max':
          _v = [..._v, CustomValidators.max(validators[v].value)];
          break;
        case 'gt':
          _v = [..._v, CustomValidators.gt(validators[v].value)];
          break;
        case 'lt':
          _v = [..._v, CustomValidators.lt(validators[v].value)];
          break;
        case 'digits':
          _v = [..._v, CustomValidators.digits];
          break;
        case 'number':
          _v = [..._v, CustomValidators.number];
          break;
        case 'url':
          _v = [..._v, CustomValidators.url];
          break;
        case 'email':
          _v = [..._v, CustomValidators.email];
          break;
        case 'date':
          _v = [..._v, CustomValidators.date];
          break;
        case 'minDate':
          _v = [..._v, CustomValidators.minDate(validators[v].value)];
          break;
        case 'maxDate':
          _v = [..._v, CustomValidators.maxDate(validators[v].value)];
          break;
        case 'equal':
          _v = [..._v, CustomValidators.equal(validators[v].value)];
          break;
        case 'notEqual':
          _v = [..._v, CustomValidators.notEqual(validators[v].value)];
          break;
      }
    }
    return _v;
  }

  ngOnChanges() {
    // console.log('fields', this.fields);
    const f = NgxFormsComponent.parseFields(this.fields, this.formId);
    // console.log('f is', f);
    this.form = new FormGroup(f.fg);
    // console.log('form', this.form);
    this.markForCheck();

  }

  submit() {
    Object.keys(this.form.controls).forEach(field => {
      const control = this.form.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      }
    });
    if (this.form.valid) {
      console.log('form before emit', this.form);
      this.onSubmit.emit(this.form);
    }
    console.log('ngx forms component submit function');
  }

  onImageEvent(field: FormField, ev: any) {
    this.emit('image', field, ev, this.form);
  }

  onAddEvent(field: FormField, ev: any) {
    this.emit('add', field, ev, this.form);
  }

  onSelectEvent(field: FormField, ev: any) {
    this.emit('select', field, ev, this.form);
    console.log('on select event form', this.form);
    console.log('this.fields on select event', this.fields);
  }

  emit(type: string, field: FormField, ev?: any, form?: any) {
    this.formEvents.emit({type: type, data: ev, field: field, form: form});
  }

  markForCheck() {
    setTimeout(() => {
      if (!this._ref['destroyed']) {
        this._ref.markForCheck();

        this._ref.detectChanges();
      }
    });
  }

  trackByFn(i: number, item: any) {
    return i;
  }


}
