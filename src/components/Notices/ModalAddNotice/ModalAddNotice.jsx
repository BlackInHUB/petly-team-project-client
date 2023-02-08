import { useDispatch } from 'react-redux';
import noticesOperations from 'redux/notices/noticesOperations';

import Button from 'components/baseComponents/Button/Button';
import ModalForm from 'components/baseComponents/ModalForm/ModalForm';
import { Modal } from 'components/Modal/Modal';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import femaleIcon from 'images/icons/modalAddsPet/female_icon.jpg';
import maleIcon from 'images/icons/modalAddsPet/male_icon.jpg';
import plusIcon from 'images/icons/modalAddsPet/plus.svg';

import { DropdownGroup } from 'components/baseComponents/Dropdown/DropdownGroup';

import { useState } from 'react';
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
  Error,
  FormButtonContainerWrapper,
} from './style';

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
    price: '',
    photoUrl: '',
    comments: '',
    next: '',
    submit: '',
  };
  const errorInitialState = {
    title: '',
    name: '',
    breed: '',
    location: '',
    price: '',
    comments: '',
  };
  const [step, setStep] = useState(1);
  const [values, setValues] = useState(initialState);
  const [isError, setIsError] = useState(errorInitialState);
  const [startDate, setStartDate] = useState();

  const handleChange = e => {
    const { value, type, name, files } = e.target;
    const newValue =
      type === 'file'
        ? files
        : name === 'sex'
        ? e.target.getAttribute('data-value')
        : value;

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
      values.name.length < 2 || values.name.length > 16
        ? setIsError({ ...isError, name: 'please type from 2 to 16 letters' })
        : setIsError({ ...isError, name: '', next: '' });
    }
    if (e.target.name === 'breed') {
      values.breed.length < 2 || values.breed.length > 24
        ? setIsError({ ...isError, breed: 'please type from 2 to 24 letters' })
        : setIsError({ ...isError, breed: '', next: '' });
    }
    if (e.target.name === 'location') {
      !values.location.match(
        /^\s*([A-ZА-Я][a-zа-я]+,\s?)?[A-ZА-Я][a-zа-я]+\s*$/
      )
        ? setIsError({
            ...isError,
            location: 'please type city or/and region, like "Brovary, Kyiv"',
          })
        : setIsError({ ...isError, location: '', submit: '' });
    }
    if (e.target.name === 'price') {
      values.price.length === 0
        ? setIsError({ ...isError, price: 'please fill this field' })
        : setIsError({ ...isError, price: '', submit: '' });
    }
    if (e.target.name === 'comments') {
      values.comments.length > 120
        ? setIsError({ ...isError, comments: 'max size - 120 letters' })
        : setIsError({ ...isError, comments: '', submit: '' });
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
      (values.price === '' && values.category === 'sell')
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
    values.category === 'sell' && data.append('price', values.price);
    data.append('photoUrl', values.photoUrl[0]);
    data.append('comments', values.comments);

    dispatch(noticesOperations.add(data));

    Notify.init({ position: 'center-center' });
    Notify.success('ad successfully created', {
      timeout: 1500,
    });

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
        values.title === ''
      ) {
        setIsError({ ...isError, next: 'please put valid data' });
        return;
      }
    }
    setStep(prev => prev + args[0]);
    console.log(step);
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
                    values.category === 'for-free'
                      ? 'primary'
                      : 'secondary'
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
                  id="adTitle"
                  name="title"
                  placeholder="Type title of ad"
                  value={values.title}
                  onChange={e => handleChange(e)}
                  onBlur={e => validation(e)}
                />
                <Error>{isError.title ? isError.title : null}</Error>
              </InputContainer>
              <InputContainer>
                <Label htmlFor="petName">Name pet</Label>

                <Input
                  id="petName"
                  name="name"
                  placeholder="Type pet name"
                  value={values.name}
                  onChange={e => handleChange(e)}
                  onBlur={e => validation(e)}
                />
                <Error>{isError.name ? isError.name : null}</Error>
              </InputContainer>
              <InputContainer>
                <Label htmlFor="petBirthday">Date of birth</Label>
                <DropdownGroup date={startDate} setState={setStartDate} />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="petBreed">Breed</Label>

                <Input
                  id="petBreed"
                  name="breed"
                  placeholder="Type breed"
                  value={values.breed}
                  onChange={e => handleChange(e)}
                  onBlur={e => validation(e)}
                />
                <Error>{isError.breed ? isError.breed : null}</Error>
              </InputContainer>
            </FormContainer>
            <FormButtonContainerWrapper>
              {' '}
              <FormButtonContainer>
                <Button onClick={() => stepChange(1)}>Next</Button>
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
              <Error>{isError.next ? isError.next : null}</Error>
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
                  id="petLocation"
                  name="location"
                  placeholder="Type location"
                  onChange={e => {
                    handleChange(e);
                  }}
                  value={values.location}
                  onBlur={e => validation(e)}
                />
                <Error>{isError.location ? isError.location : null}</Error>
              </InputContainer>
              {values.category === 'sell' && (
                <InputContainer>
                  <Label htmlFor="petPrice">
                    Price<span style={{ color: 'red' }}>*</span>:
                  </Label>

                  <Input
                    id="petPrice"
                    name="price"
                    placeholder="Type price"
                    onChange={e => {
                      handleChange(e);
                    }}
                    value={values.price}
                    onBlur={e => validation(e)}
                  />
                  <Error>{isError.price ? isError.price : null}</Error>
                </InputContainer>
              )}
              <InputContainer>
                <Label htmlFor="petImage">Load the pet's image:</Label>
                <LabelPhotoInput htmlFor="petImage">
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
                  }}
                  rows={4}
                  id="petComments"
                  name="comments"
                  placeholder="Type comment"
                  onBlur={e => validation(e)}
                  value={values.comments}
                />
                <Error>{isError.comments ? isError.comments : null}</Error>
              </InputContainer>
            </FormContainer>
            <FormButtonContainerWrapper>
              <FormButtonContainer>
                <Button onClick={e => handleSubmit(e)}>Done</Button>
                <Button buttonStyle="secondary" onClick={() => stepChange(-1)}>
                  Back
                </Button>
              </FormButtonContainer>
              <Error>{isError.submit ? isError.submit : null}</Error>
            </FormButtonContainerWrapper>
          </>
        )}
      </ModalForm>
    </Modal>
  );
};

export default ModalAddNotice;
