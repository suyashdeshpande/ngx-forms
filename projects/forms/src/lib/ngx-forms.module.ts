import {NgModule} from '@angular/core';
import {NgxFormsComponent} from './ngx-forms.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomFormsModule} from 'ngx-custom-validators';
import {NgxFlatpickrModule} from '@harryy/ngx-flatpickr';
import {NgxTimepickerModule} from '@harryy/ngx-timepicker';
import {NgSelectModule} from '@ng-select/ng-select';
import {
  NgxInputComponent,
  NgxSelectComponent,
  NgxMultipleSelectComponent,
  NgxTextAreaComponent,
  NgxCheckboxComponent,
  NgxRadioComponent,
  NgxDateComponent,
  NgxTimeComponent,
  NgxPasswordComponent,
} from './components';
import {NgxPasswordToggleModule} from 'ngx-password-toggle';
import {NgxUploadComponent} from './components/image/uploader/ngx-upload.component';
import {NgxCropComponent} from './components/image/cropper/ngx-crop.component';

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
    NgxPasswordComponent,

    NgxUploadComponent,
    NgxCropComponent
  ],
  exports: [
    NgxFormsComponent,
    NgxFormsComponent,
    NgxInputComponent,
    NgxSelectComponent,
    NgxMultipleSelectComponent,
    NgxTextAreaComponent,
    NgxCheckboxComponent,
    NgxRadioComponent,
    NgxDateComponent,
    NgxTimeComponent,
    NgxPasswordComponent,

    NgxUploadComponent,
    NgxCropComponent
  ]
})
export class NgxFormsModule {
}
