import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NgxFormsComponent} from '../../projects/forms/src/lib/ngx-forms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fields: any = [];
  formId = 'form';
  myFormGroup: FormGroup;
  fields2: any;

  constructor() {
    this.fields = [
      {
        name: 'name',
        label: 'Name',
        type: 'text',
        value: 'Suyash',
        validators: {
          maxlength: {
            value: 10,
            message: 'max length exceeded'
          },
          minlength: {
            value: 2,
            message: 'min length is 2'
          },
          required: {
            message: 'Name is required'
          },
        },
        isVisible: true
      },
      {
        name: 'date',
        label: 'Date',
        type: 'date',
        placeholder: 'Pick Date',
        value: '',
        isVisible: true
      },
      {
        name: 'time',
        label: 'Time',
        type: 'time',
        placeholder: 'Pick Time',
        value: '',
        isVisible: true
      },
      {
        name: 'description',
        label: 'Description',
        type: 'textarea',
        placeholder: 'Write here',
        value: '',
        isVisible: true
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
        placeholder: 'Enter Password',
        value: '',
        isVisible: true,
        validators: {
          required: {
            message: 'Password required'
          }
        }
      },
      {
        name: 'confirmPassword',
        label: 'Confirm Password',
        type: 'password',
        placeholder: 'Retype Password',
        value: '',
        isVisible: true,
        validators: {
          required: {
            message: 'Confirm Password required'
          },
          equalTo: {
            value: 'password',
            message: 'Password doesnot match'
          }
        }
      },
      {
        name: 'location multiple',
        label: 'Location multiple',
        type: 'multiple-select',
        value: '',
        isVisible: true,
        options: [
          {
            id: 12,
            label: 'Bhopal',
            value: 'vBhopal',
            name: 'nBhopal'
          },
          {
            id: 13,
            label: 'Indore',
            value: 'vIndore',
            name: 'nIndore'
          }
        ],
        multiple: true
      },
      {
        name: 'location',
        label: 'Location',
        type: 'select',
        isVisible: true,
        value: '',
        // options: ['Bhopal', 'Indore', 'Delhi'],
        options: [
          {
            id: 10,
            label: 'Bhopal',
            value: 'vBhopal',
            name: 'nBhopal'
          },
          {
            id: 11,
            label: 'Indore',
            value: 'vIndore',
            name: 'nIndore'
          }
        ]
      },
      {
        type: 'checkbox',
        label: 'Alphabets',
        name: 'alphabets',
        value: '',
        options: [
          {
            id: 1,
            // value: 'a',
            name: 'A',
            label: 'a',
          },
          {
            id: 2,
            // value: 'b',
            name: 'B',
            label: 'b'
          }],
        isVisible: true
      },
      {
        type: 'radio',
        label: 'Gender',
        name: 'gender',
        value: '',
        options: [
          {
            id: 3,
            value: 'm',
            name: 'M',
            label: 'M',
          },
          {
            id: 4,
            value: 'f',
            name: 'F',
            label: 'F'
          }
        ],
        isVisible: true
      }
    ];
    this.fields2 = [
      {
        name: 'address',
        label: 'Address',
        type: 'text',
        value: 'my address'
      }
    ];

    // console.log('new fields total', [...this.fields, {...this.fields2}[0]]);

    // this.myFormGroup = new FormGroup(NgxFormsComponent.parseFields([...this.fields, {...this.fields2}[0]], this.formId).fg);
    this.myFormGroup = NgxFormsComponent.createFormGroup([...this.fields, {...this.fields2}[0]], this.formId);
    console.log('my form group', this.myFormGroup);
  }


  submit() {

    console.log('fields console.log to check 2 way binding', this.fields);

    Object.keys(this.myFormGroup.controls).forEach(field => {
      const control = this.myFormGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      }
    });

    if (this.myFormGroup.valid) {
      console.log('form submitted', this.myFormGroup);
    }
  }

}
