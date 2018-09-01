export const generateFields = {
  name: {
    name: 'name',
    label: 'Name',
    type: 'text',
    value: '',
    validators: {
      required: {
        message: 'Name is required'
      },
    },
    isVisible: true
  },
  email: {
    name: 'email',
    label: 'Name',
    type: 'email',
    value: '',
    validators: {
      pattern: {
        value: '@',
        message: 'Incorrect email'
      }
    },
    isVisible: true
  },
  date: {
    name: 'date',
    label: 'Date',
    type: 'date',
    placeholder: 'Pick Date',
    value: '',
    isVisible: true
  },
  time: {
    name: 'time',
    label: 'Time',
    type: 'time',
    placeholder: 'Pick Time',
    value: '',
    isVisible: true
  },
  password: {
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
  confirmPassword: {
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
        message: 'Password does not match'
      }
    }
  },
};
