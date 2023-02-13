import { useDispatch } from 'react-redux';
import noticesOperations from 'redux/notices/noticesOperations';

import Button from 'components/baseComponents/Button/Button';
import ModalForm from 'components/baseComponents/ModalForm/ModalForm';
import { Modal } from 'components/Modal/Modal';

import femaleIcon from 'images/icons/modalAddsPet/female_icon.jpg';
import maleIcon from 'images/icons/modalAddsPet/male_icon.jpg';
import plusIcon from 'images/icons/modalAddsPet/plus.svg';

import { DropdownGroup } from 'components/baseComponents/Dropdown/DropdownGroup';

import { useState } from 'react';

import { Error } from 'components/AuthForm/style';
import {
  ButtonContainer,
  FormContainer,
  Input,
  Label,
  InputContainer,
  FormButtonContainer,
  Title,
  TitleContainer,
  TopText,
  Img,
  Textarea,
  PhotoInput,
  LabelPhotoInput,
  ImageContainer,
  ImagePlus,
  Image,
  FormButtonContainerWrapper,
  PriceContainer,
} from './style';
import { Dropdown } from 'components/baseComponents/Dropdown/Dropdown';

const ModalAddNotice = props => {
  const dispatch = useDispatch();

  const initialState = {
    category: 'sell',
    title: '',
    name: '',
    birthday: '',
    breed: '',
    sex: 'male',
    location: '',
    price: 0,
    photoUrl: '',
    comments: '',
    next: '',
    submit: '',
  };
  const optionsCurrency = [
    { value: 'UAH', label: 'UAH' },
    { value: 'USD', label: 'USD' },
    { value: 'EURO', label: 'EURO' },
  ];

  const errorInitialState = {
    title: '',
    name: '',
    birthday: '',
    breed: '',
    location: '',
    price: '',
    comments: '',
  };
  const [step, setStep] = useState(1);
  const [values, setValues] = useState(initialState);
  const [isError, setIsError] = useState(errorInitialState);
  const [startDate, setStartDate] = useState();
  const [dateError, setDateError] = useState(null);
  const [currency, setCurrency] = useState('UAH');

  const handleChange = e => {
    const { value, type, name, files } = e.target;
    const newValue =
      type === 'file'
        ? files
        : name === 'sex'
        ? e.target.getAttribute('data-value')
        : value;
    if (type === 'file' && newValue.length === 0) return;
    setValues(prevState => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const validation = e => {
    if (e.target.name === 'title') {
      values.title.length < 2 || values.title.length > 48
        ? setIsError({ ...isError, title: 'please type from 2 to 48 letters' })
        : setIsError({ ...isError, title: '', next: '' });
    }
    if (e.target.name === 'name') {
      values.name.length !== 0 &&
      (values.name.length < 2 || values.name.length > 16)
        ? setIsError({ ...isError, name: 'please type from 2 to 16 letters' })
        : setIsError({ ...isError, name: '', next: '' });
    }
    if (e.target.name === 'breed') {
      values.breed.length !== 0 &&
      (values.breed.length < 2 || values.breed.length > 24)
        ? setIsError({ ...isError, breed: 'please type from 2 to 24 letters' })
        : setIsError({ ...isError, breed: '', next: '' });
    }

    if (e.target.name === 'location') {
      !values.location.match(
        /^\s*([A-ZёЁЇїІіЄєҐґА-Я][a-zа-я]+,\s?)?[A-ZёЁЇїІіЄєҐґА-Я][a-zа-я]+\s*$/
      )
        ? setIsError({
            ...isError,
            location: 'type smth like "Brovary, Kyiv"',
          })
        : setIsError({ ...isError, location: '', submit: '' });
    }
    if (e.target.name === 'price') {
      values.price = parseInt(values.price);
      values.price.length === 0 || values.price === 0
        ? setIsError({ ...isError, price: 'please fill this field' })
        : setIsError({ ...isError, price: '', submit: '' });
      values.price > 999999999
        ? setIsError({ ...isError, price: 'easy, easy' })
        : setIsError({ ...isError, price: '', submit: '' });
    }
    if (e.target.name === 'comments') {
      const length = values.comments.length;
      switch (true) {
        case length === 0:
          setIsError({ ...isError, comments: 'please fill this field' });
          break;
        case 0 < length && length < 8:
          setIsError({ ...isError, comments: 'min size - 8 letters' });
          break;
        case length > 120:
          setIsError({ ...isError, comments: 'max size - 120 letters' });
          break;
        default:
          setIsError({ ...isError, comments: '', submit: '' });
          break;
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    setIsError({ ...isError, submit: '' });

    Object.entries(isError).forEach(([key, value]) => {
      if (value !== '' && key !== 'submit')
        setIsError({ ...isError, submit: 'please put valid data' });

      return;
    });

    if (
      values.title === '' ||
      values.location === '' ||
      values.comments === '' ||
      (values.price === 0 && values.category === 'sell')
    ) {
      setIsError({ ...isError, submit: 'please put all data' });
      return;
    }

    const data = new FormData();
    data.append('category', values.category);
    data.append('title', values.title);
    data.append('name', values.name);
    data.append('birthday', startDate);
    data.append('breed', values.breed);
    data.append('sex', values.sex);
    data.append('location', values.location);
    values.category === 'sell' &&
      data.append('price', parseInt(values.price).toString() + ' ' + currency);

    values.photoUrl && data.append('photoUrl', values.photoUrl[0]);
    data.append('comments', values.comments);

    dispatch(noticesOperations.add(data));

    document.body.style.overflow = '';
    props.setShow();
  };

  const stepChange = (...args) => {
    if (step === 1) {
      setIsError({ ...isError, next: '' });
      if (
        isError.title ||
        isError.name ||
        isError.breed ||
        dateError ||
        values.title === ''
      ) {
        setIsError({ ...isError, next: 'please put valid data' });
        return;
      }
    }
    setStep(prev => prev + args[0]);
  };

  return (
    <Modal setShow={props.setShow}>
      <ModalForm
        width={props.width}
        setShow={props.setShow}
        paddings={props.paddings}
      >
        <TitleContainer>
          <Title>Add Advert</Title>

          {step === 1 && (
            <TopText>Please, give us as many info, as you can.</TopText>
          )}
        </TitleContainer>
        {step === 1 && (
          <>
            <FormContainer>
              <ButtonContainer>
                <Button
                  name="category"
                  style={{ width: 'max-content', height: '35px' }}
                  buttonStyle={
                    values.category === 'lost-found' ? 'primary' : 'secondary'
                  }
                  value="lost-found"
                  onClick={e => handleChange(e)}
                >
                  lost/found
                </Button>
                <Button
                  name="category"
                  style={{ width: 'max-content', height: '35px' }}
                  buttonStyle={
                    values.category === 'for-free' ? 'primary' : 'secondary'
                  }
                  value="for-free"
                  onClick={e => handleChange(e)}
                >
                  In good hands
                </Button>
                <Button
                  name="category"
                  style={{ width: 'max-content', height: '35px' }}
                  buttonStyle={
                    values.category === 'sell' ? 'primary' : 'secondary'
                  }
                  value="sell"
                  onClick={e => handleChange(e)}
                >
                  sell
                </Button>
              </ButtonContainer>

              <InputContainer>
                <Label htmlFor="adTitle">
                  Tittle of ad<span style={{ color: 'red' }}>*</span>
                </Label>

                <Input
                  maxLength={48}
                  id="adTitle"
                  name="title"
                  placeholder="Type title of ad"
                  value={values.title}
                  onChange={e => {
                    handleChange(e);
                    isError.title && validation(e);
                  }}
                  onBlur={e => validation(e)}
                />
                {isError.title && <Error>{isError.title}</Error>}
              </InputContainer>
              <InputContainer>
                <Label htmlFor="petName">Name pet</Label>

                <Input
                  maxLength={16}
                  id="petName"
                  name="name"
                  placeholder="Type pet name"
                  value={values.name}
                  onChange={e => {
                    handleChange(e);
                    isError.name && validation(e);
                  }}
                  onBlur={e => validation(e)}
                />
                {isError.name && <Error>{isError.name}</Error>}
              </InputContainer>
              <InputContainer>
                <Label htmlFor="petBirthday">Date of birth</Label>
                <DropdownGroup
                  date={startDate}
                  setState={setStartDate}
                  setDateError={setDateError}
                />
                {dateError && <Error>{dateError}</Error>}
              </InputContainer>
              <InputContainer>
                <Label htmlFor="petBreed">Breed</Label>

                <Input
                  maxLength={24}
                  id="petBreed"
                  name="breed"
                  placeholder="Type breed"
                  value={values.breed}
                  onChange={e => {
                    handleChange(e);
                    isError.breed && validation(e);
                  }}
                  onBlur={e => validation(e)}
                />
                {isError.breed && <Error>{isError.breed}</Error>}
              </InputContainer>
            </FormContainer>
            <FormButtonContainerWrapper>
              <FormButtonContainer>
                <Button onClick={() => stepChange(1)}>
                  Next {isError.next && <Error>{isError.next}</Error>}
                </Button>
                <Button
                  buttonStyle="secondary"
                  onClick={() => {
                    document.body.style.overflow = '';
                    props.setShow();
                  }}
                >
                  Cancel
                </Button>
              </FormButtonContainer>
            </FormButtonContainerWrapper>
          </>
        )}
        {step === 2 && (
          <>
            <FormContainer>
              <InputContainer>
                <Label>
                  The sex<span style={{ color: 'red' }}>*</span>:
                </Label>
                <div style={{ display: 'flex', gap: '80px' }}>
                  <Img
                    tabIndex={0}
                    onKeyPress={e => e.key === 'Enter' && handleChange(e)}
                    name="sex"
                    data-value="male"
                    src={maleIcon}
                    onClick={e => {
                      handleChange(e);
                    }}
                    style={{
                      filter:
                        values.sex === 'male'
                          ? 'grayscale(25%)'
                          : 'grayscale(100%)',
                    }}
                    alt="male"
                  />
                  <Img
                    tabIndex={0}
                    onKeyPress={e => e.key === 'Enter' && handleChange(e)}
                    name="sex"
                    data-value="female"
                    src={femaleIcon}
                    alt="female"
                    onClick={e => {
                      handleChange(e);
                    }}
                    style={{
                      filter:
                        values.sex === 'female'
                          ? 'grayscale(25%)'
                          : 'grayscale(100%)',
                    }}
                  />
                </div>
              </InputContainer>
              <InputContainer>
                <Label htmlFor="petLocation">
                  Location<span style={{ color: 'red' }}>*</span>:
                </Label>

                <Input
                  maxLength={40}
                  id="petLocation"
                  name="location"
                  placeholder="Type location"
                  onChange={e => {
                    handleChange(e);
                    isError.location && validation(e);
                  }}
                  value={values.location}
                  onBlur={e => validation(e)}
                />
                {isError.location && <Error>{isError.location}</Error>}
              </InputContainer>
              {values.category === 'sell' && (
                <InputContainer>
                  <Label htmlFor="petPrice">
                    Price<span style={{ color: 'red' }}>*</span>:
                  </Label>
                  <PriceContainer>
                    <Dropdown
                      placeHolder={currency}
                      options={optionsCurrency}
                      setValue={setCurrency}
                    />
                    <Input
                      maxLength={20}
                      id="petPrice"
                      name="price"
                      type="number"
                      placeholder="Type price"
                      onChange={e => {
                        handleChange(e);
                        isError.price && validation(e);
                      }}
                      value={values.price}
                      onBlur={e => validation(e)}
                    />
                    {isError.price && <Error>{isError.price}</Error>}
                  </PriceContainer>
                </InputContainer>
              )}
              <InputContainer>
                <Label htmlFor="petImage">Load the pet's image:</Label>
                <LabelPhotoInput
                  htmlFor="petImage"
                  tabIndex={0}
                  onKeyPress={e => e.key === 'Enter' && e.target.click()}
                >
                  <ImageContainer>
                    <ImagePlus src={plusIcon} alt="add"></ImagePlus>
                    {values.photoUrl && (
                      <Image
                        src={URL.createObjectURL(values.photoUrl[0])}
                        alt=""
                      />
                    )}
                  </ImageContainer>
                </LabelPhotoInput>
                <PhotoInput
                  onChange={e => {
                    handleChange(e);
                  }}
                  type="file"
                  id="petImage"
                  name="photoUrl"
                  accept=".gif,.jpg,.jpeg,.png"
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="petComments">Comment</Label>

                <Textarea
                  onChange={e => {
                    handleChange(e);
                    isError.comments && validation(e);
                  }}
                  maxLength={120}
                  rows={4}
                  id="petComments"
                  name="comments"
                  placeholder="Type comment"
                  onBlur={e => validation(e)}
                  value={values.comments}
                />
                {isError.comments && <Error>{isError.comments}</Error>}
              </InputContainer>
            </FormContainer>
            <FormButtonContainerWrapper>
              <FormButtonContainer>
                <Button onClick={e => handleSubmit(e)}>
                  Done {isError.submit && <Error>{isError.submit}</Error>}
                </Button>
                <Button buttonStyle="secondary" onClick={() => stepChange(-1)}>
                  Back
                </Button>
              </FormButtonContainer>
            </FormButtonContainerWrapper>
          </>
        )}
      </ModalForm>
    </Modal>
  );
};

export default ModalAddNotice;
