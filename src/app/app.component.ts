import {Component} from '@angular/core';
import {FormField} from '../../projects/forms/src/lib/interface/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fields: any;
  formId = 'form';

  constructor() {
    this.fields = [
      {
        name: 'name',
        label: 'Name',
        type: 'text',
        value: 'Suyash',
        validators: {
          required: {
            message: 'Name is required'
          },
          maxlength: {
            value: 10,
            message: 'max length exceeded'
          }
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
  }

  submit(ev: any) {
    console.log('submitted', ev);
  }
}
