import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useMatchMedia from 'hooks/useMatchMedia/useMatchMedia';

import DatePicker from 'react-date-picker';
import { useFormik } from 'formik';
import { validationSchema, initialValues } from './ValidationSchema';

import { addOwnNotice } from 'redux/notice/noticeOperations';
import { showAlertMessage } from 'utils/showMessages';

import Loader from 'components/Loader';
// import Box from 'components/Common/Box';

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
  DivBox,
  MadBox,
} from './ModalAddNotice.styled';

const ModalAddNotice = ({ closeModal }) => {
  const { isMobile } = useMatchMedia();
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
    initialValues: initialValues,

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: validationSchema,
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

  // console.log(formik.values);

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
      showAlertMessage('Fill out all fields');
      return;
    }
    if (locationError || commentsError || (category === 'sell' && priceError)) {
      showAlertMessage('Put location as: city, district');
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
        showAlertMessage('Fill out all fields');
        return;
      }

      if (titleError || nameError || breedError) {
        showAlertMessage('Fill out all fields correctly');
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
        {page === 1 && (
          <MaddNotDescr>Choose the category that suits you:</MaddNotDescr>
        )}
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
                {isMobile ? (
                  <DivBox>
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
                  </DivBox>
                ) : (
                  <>
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
                  </>
                )}
              </MaddNotRadioToolbar>
              <MaddNotLabel forHtml="title">Tittle of ad*</MaddNotLabel>
              <MaddNotinput
                type="text"
                name="title"
                id="title"
                placeholder={'titleAd'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={title}
              />
              <MaddNotLabel forHtml="name">Name pet</MaddNotLabel>
              <MaddNotinput
                type="text"
                name="name"
                id="name"
                placeholder={'name'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={name}
              />
              <MaddNotLabel forHtml="birthday">Date</MaddNotLabel>
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
                      new Date(Date.parse(value)),
                    );
                  }}
                />
              </MaddNotinput>
              <MaddNotLabel forHtml="breed">Breed</MaddNotLabel>
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
            <MadBox>
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
              <MaddNotLabel forHtml="location">Location:</MaddNotLabel>
              <MaddNotinput
                type="text"
                name="location"
                id="location"
                placeholder={'location'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={location}
              />
              {category === 'sell' && (
                <>
                  <MaddNotLabel forHtml="price">Price</MaddNotLabel>
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
              <div>
                <Title>Load the pet’s image:</Title>
                <MaddNotLabelLoad forHtml="file">
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
                        event.currentTarget.files[0],
                      );
                    }}
                  />
                </MaddNotLabelLoad>
              </div>

              <MaddNotLabel forHtml="comments">Comments</MaddNotLabel>
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
            </MadBox>
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

export default ModalAddNotice;
