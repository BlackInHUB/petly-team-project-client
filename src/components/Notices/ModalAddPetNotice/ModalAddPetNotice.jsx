import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import { addOwnNotice } from 'redux/notice/noticeOperations';
import DatePicker from 'react-date-picker';
import { showAlertMessage } from 'utils/showMessages';

import Loader from 'components/Loader';

import iconClose from 'assets/icons/icon-close.svg';
import celendar from 'assets/icons/calendar.svg';
import loadMobile from 'assets/images/Modal/loadMobile.png';

import {
  MaddNotModal,
  MaddNotBtnClose,
  ImgClose,
  MaddNotLoader,
  MaddNotTitle,
  MaddNotDescr,
  MaddNotRadioToolbar,
  MaddNotLabelToolbar,
  MaddNotInputToolbar,
  MaddNotLabel,
  MaddNotinput,
  MaddNotTextarea,
  MaddNotAccentBtn,
  MaddNotButton,
  MaddNotBlock,
  MaddNotLabelDistance,
  MaddNotRadioToolbar2,
  MaddNotBlockOfRadio,
  MaddNotLabelMale,
  MaddNotLabelFemale,
  MaddNotInputRadio,
  MaddNotSexDescr,
  MaddNotLabelLoad,
  MaddNotThumbLoadImg,
  MaddNotLoadImage,
  MaddNotInputLoad,
  Title,
  IconMale,
  IconFemale,
  Item,
} from './ModalAddPetNotice.styled';

const ModalAddPetNotice = ({ setArray, closeModal }) => {
  const [page, setPage] = useState(1);
  const [photo, setPhoto] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [select, setSelect] = useState('optionA');
  const [sel, setSel] = useState('optA');
  const dispatch = useDispatch();

  const handleSelectChange = event => {
    const value = event.target.id;
    setSelect(value);
  };
  const handleSelectSex = event => {
    const value = event.target.id;
    setSel(value);
  };

  const formik = useFormik({
    initialValues: {
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
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      category: Yup.string().required('validation.required'),
      title: Yup.string()
        .min(2, 'validation.min')
        .max(48, 'validation.titleMax')
        .required('validation.required'),
      name: Yup.string()
        .min(2, 'validation.min')
        .max(16, 'validation.namePetMax'),
      birthday: Yup.string()
        .nullable()
        .test('birthday', function (value) {
          return moment().diff(moment(value, 'DD-MM-YYYY'));
        })
        .required('validation.required'),
      breed: Yup.string().min(2, 'validation.min').max(24, 'validation.max'),
      sex: Yup.string().required('validation.required'),
      location: Yup.string()
        .min(2, 'validation.min')
        .max(24, 'validation.max')
        .required('validation.required'),
      price: Yup.number()
        .typeError('validation.priceNum')
        .integer('validation.priceInt')
        .required('validation.required'),
      comments: Yup.string()
        .min(8, 'validation.commentsMin')
        .max(120, 'validation.commentsMax'),
    }),
  });

  const {
    category,
    title,
    name,
    birthday,
    breed,
    sex,
    location,
    price,
    comments,
    avatar,
  } = formik.values;

  const {
    title: titleError,
    name: nameError,
    breed: breedError,
    location: locationError,
    price: priceError,
    comments: commentsError,
  } = formik.errors;

  useEffect(() => {
    if (!avatar) {
      return;
    }
    /* Создаем виртуальную ссылку на загруженный файл */
    const objectUrl = URL.createObjectURL(avatar);
    setPhoto(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [avatar]);

  const onFormSubmit = async e => {
    e.preventDefault();

    if (location === '' || (category === 'sell' && price === '')) {
      showAlertMessage('errors.allFields');
      return;
    }
    if (locationError || commentsError || (category === 'sell' && priceError)) {
      showAlertMessage('errors.allFieldsFormat');
      return;
    }
    setIsLoading(true);

    const transformedPrice = category === 'sell' ? Number(price) : '';

    const toDateFormat = (data, from, to) => {
      return new Date(data)
        .toLocaleString('en-US', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
        .replaceAll(from, to);
    };

    const arrayOfData = Object.entries({
      category,
      title,
      name,
      birthday: toDateFormat(birthday, '/', '.'),
      breed,
      sex,
      location,
      price: transformedPrice,
      comments,
      avatar,
    });

    const filteredArray = arrayOfData.filter(item => item[1]);
    const info = filteredArray.reduce((previousValue, feature) => {
      return { ...previousValue, [feature[0]]: feature[1] };
    }, {});

    const { payload } = await dispatch(addOwnNotice(info));
    if (payload?.category === info?.category) {
      closeModal();
    }
    setIsLoading(false);
  };

  const onPageChange = () => {
    if (page === 1) {
      if (title === '') {
        showAlertMessage('errors.allFields');
        return;
      }

      if (titleError || nameError || breedError) {
        showAlertMessage('errors.allFieldsFormat');
        return;
      }
      setPage(2);
      return;
    }
    setPage(1);
  };

  return (
    <>
      <MaddNotModal>
        <MaddNotBtnClose type="button" onClick={closeModal}>
          <ImgClose src={iconClose} alt="" />
        </MaddNotBtnClose>
        <MaddNotTitle>Add pet</MaddNotTitle>
        {page === 1 && <MaddNotDescr>Fill in the form fields</MaddNotDescr>}
        <form onSubmit={onFormSubmit} /* encType="multipart/form-data" */>
          {page === 1 && (
            <>
              <MaddNotRadioToolbar>
                <Item>
                  <MaddNotInputToolbar
                    type="radio"
                    id="optionC"
                    name="category"
                    value="lost-found"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={select === 'optionC'}
                    onChangeCapture={event => handleSelectChange(event)}
                  />
                  <MaddNotLabelToolbar htmlFor="optionC">
                    lost/found
                  </MaddNotLabelToolbar>
                </Item>
                <Item>
                  <MaddNotInputToolbar
                    type="radio"
                    id="optionB"
                    name="category"
                    value="in-good-hands"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={select === 'optionB'}
                    onChangeCapture={event => handleSelectChange(event)}
                  />
                  <MaddNotLabelToolbar htmlFor="optionB">
                    in good hands
                  </MaddNotLabelToolbar>
                </Item>
                <Item>
                  <MaddNotInputToolbar
                    type="radio"
                    id="optionA"
                    value={('optionA', 'sell')}
                    name="category"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={select === 'optionA'}
                    onChangeCapture={event => handleSelectChange(event)}
                  />
                  <MaddNotLabelToolbar htmlFor="optionA">
                    sell
                  </MaddNotLabelToolbar>
                </Item>
              </MaddNotRadioToolbar>
              <MaddNotLabel forhtml="title">Tittle of ad*</MaddNotLabel>
              <MaddNotinput
                type="text"
                name="title"
                id="title"
                placeholder={'titleAd'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={title}
              />
              <MaddNotLabel forhtml="name">Name pet</MaddNotLabel>
              <MaddNotinput
                type="text"
                name="name"
                id="name"
                placeholder={'name'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={name}
              />
              <MaddNotLabel forhtml="birthday">Date</MaddNotLabel>
              <MaddNotinput as={'div'}>
                <DatePicker
                  clearIcon={null}
                  calendarIcon={<ImgClose src={celendar} alt="" />}
                  format="dd.MM.yyyy"
                  selected={birthday}
                  // dateFormat="dd.MM.yyyy"
                  maxDate={new Date()}
                  yearPlaceholder={'years'}
                  monthPlaceholder={'months'}
                  dayPlaceholder={'days'}
                  id="birthday"
                  name="birthday"
                  value={birthday}
                  onChange={value => {
                    if (!value) {
                      return;
                    }
                    formik.setFieldValue(
                      'birthday',
                      new Date(Date.parse(value))
                    );
                  }}
                />
              </MaddNotinput>
              <MaddNotLabel forhtml="breed">Breed</MaddNotLabel>
              <MaddNotinput
                type="text"
                name="breed"
                id="breed"
                placeholder={'breed'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={breed}
              />
              <MaddNotBlock>
                <MaddNotButton type="button" onClick={closeModal}>
                  Cancel
                </MaddNotButton>
                <MaddNotAccentBtn type="button" onClick={onPageChange}>
                  Next
                </MaddNotAccentBtn>
              </MaddNotBlock>
            </>
          )}
          {page === 2 && (
            <>
              <MaddNotRadioToolbar2>
                <MaddNotLabelDistance>The sex*:</MaddNotLabelDistance>
                <MaddNotBlockOfRadio>
                  <MaddNotLabelMale>
                    <IconMale />
                    <MaddNotInputRadio
                      type="radio"
                      id="optA"
                      name="sex"
                      value="male"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={sel === 'optA'}
                      onChangeCapture={event => handleSelectSex(event)}
                    />
                    <MaddNotSexDescr id="optA">Male</MaddNotSexDescr>
                  </MaddNotLabelMale>
                  <MaddNotLabelFemale>
                    <IconFemale />
                    <MaddNotInputRadio
                      type="radio"
                      id="optB"
                      name="sex"
                      value="female"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={sel === 'optB'}
                      onChangeCapture={event => handleSelectSex(event)}
                    />

                    <MaddNotSexDescr id="optB">Female</MaddNotSexDescr>
                  </MaddNotLabelFemale>
                </MaddNotBlockOfRadio>
              </MaddNotRadioToolbar2>
              <MaddNotLabel forhtml="location">Location:</MaddNotLabel>
              <MaddNotinput
                type="text"
                name="location"
                id="location"
                placeholder={'location'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={location}
              />

              <div>
                <Title>Load the pet’s image:</Title>
                <MaddNotLabelLoad forhtml="file">
                  {!photo && <ImgClose src={loadMobile} alt="add_photo" />}
                  {photo && (
                    <MaddNotThumbLoadImg>
                      <MaddNotLoadImage src={photo} alt="pet_photo" />
                    </MaddNotThumbLoadImg>
                  )}
                  <MaddNotInputLoad
                    id="file"
                    name="avatar"
                    type="file"
                    onChange={event => {
                      formik.setFieldValue(
                        'avatar',
                        event.currentTarget.files[0]
                      );
                    }}
                  />
                </MaddNotLabelLoad>
              </div>
              {category === 'sell' && (
                <>
                  <MaddNotLabel forhtml="price">Price</MaddNotLabel>
                  <MaddNotinput
                    type="text"
                    name="price"
                    id="price"
                    placeholder={'price'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={price}
                  />
                </>
              )}
              <MaddNotLabel forhtml="comments">Comments</MaddNotLabel>
              <MaddNotTextarea
                name="comments"
                id="comments"
                placeholder={'comments'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={comments}
              ></MaddNotTextarea>

              <MaddNotBlock>
                <MaddNotButton type="button" onClick={onPageChange}>
                  Back
                </MaddNotButton>
                <MaddNotAccentBtn
                  type="submit"
                  disabled={isLoading ? true : false}
                  // onSubmit={closeModal}
                >
                  Done
                </MaddNotAccentBtn>
              </MaddNotBlock>
            </>
          )}
        </form>
      </MaddNotModal>
      {isLoading && (
        <MaddNotLoader>
          <Loader />
        </MaddNotLoader>
      )}
    </>
  );
};

export default ModalAddPetNotice;
