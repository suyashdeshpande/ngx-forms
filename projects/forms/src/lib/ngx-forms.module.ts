import {NgModule} from '@angular/core';
import {NgxFormsComponent} from './ngx-forms.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomFormsModule} from 'ngx-custom-validators';
import {NgxFlatpickrModule} from '@harryy/ngx-flatpickr';
import {NgxTimepickerModule} from '@harryy/ngx-timepicker';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgxInputComponent} from './components/input/ngx-input.component';
import {NgxSelectComponent} from './components/select/ngx-select.component';
import {NgxMultipleSelectComponent} from './components/multiple-select/ngx-multiple-select.component';
import {NgxTextAreaComponent} from './components/textarea/ngx-textarea.component';
import {NgxCheckboxComponent} from './components/checkbox/ngx-checkbox.component';
import {NgxRadioComponent} from './components/radio/ngx-radio.component';
import {NgxDateComponent} from './components/date/ngx-date.component';
import {NgxTimeComponent} from './components/time/ngx-time.component';
import {NgxPasswordComponent} from './components/password/ngx-password.component';
import {NgxPasswordToggleModule} from 'ngx-password-toggle';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    NgxFlatpickrModule.forRoot(),
    NgxTimepickerModule.forRoot(),
    NgSelectModule,
    NgxPasswordToggleModule
  ],
  declarations: [
    NgxFormsComponent,
    NgxInputComponent,
    NgxSelectComponent,
    NgxMultipleSelectComponent,
    NgxTextAreaComponent,
    NgxCheckboxComponent,
    NgxRadioComponent,
    NgxDateComponent,
    NgxTimeComponent,
    NgxPasswordComponent
  ],
  exports: [NgxFormsComponent]
})
export class NgxFormsModule {
}
