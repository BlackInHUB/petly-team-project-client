import * as Yup from 'yup';
import moment from 'moment';

const cityRegex = /^(\w+(,)\s*)+\w+$/;

export const validationSchema = Yup.object().shape({
  category: Yup.string().required('Add a category'),
  title: Yup.string()
    .min(2, 'min length is 2')
    .max(48, 'max length is 48')
    .required('Wright a title'),
  name: Yup.string()
    .min(2, 'min length is 2')
    .max(16, 'max length is 16')
    .required("Wright your pet's name"),
  birthday: Yup.string()
    .nullable()
    .test('birthday', function (value) {
      return moment().diff(moment(value, 'DD-MM-YYYY'));
    })
    .required('Pick a date'),
  breed: Yup.string().min(2, 'min length is 2').max(24, 'max length is 24'),
  sex: Yup.string().required('Choose a sex'),
  location: Yup.string()
    .min(2, 'min length is 2')
    .max(24, 'max length is 24')
    .required('location is required')
    .matches(cityRegex, 'Example: Brovary, Kyiv'),
  price: Yup.number()
    // .typeError('validation.priceNum')
    .integer()
    .required('price is required'),
  comments: Yup.string()
    .min(8, 'min length is 8')
    .max(120, 'max length is 120')
    .required('Type something here (8-120 symbols)'),
});

export const initialValues = {
  category: 'sell',
  title: '',
  name: '',
  birthday: new Date(),
  breed: '',
  sex: 'male',
  location: '',
  price: '',
  comments: '',
  avatar: '',
};
