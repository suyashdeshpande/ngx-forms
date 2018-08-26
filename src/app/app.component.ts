import {Component} from '@angular/core';
import { NgxFormsComponent} from '../../projects/forms/src/lib/ngx-forms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fields: any = [
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
  formId = 'form';
  fields2: any = [
    {
      name: 'address',
      label: 'Address',
      type: 'text',
      isVisible: true
    }
  ];

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

  myFormGroup = NgxFormsComponent.parseFields(this.fields, this.formId).fg;
  submit(ev: any) {
    console.log('submitted', ev);
  }
}