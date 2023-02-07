import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';

import Button from 'components/baseComponents/Button/Button';
import ModalForm from 'components/baseComponents/ModalForm/ModalForm';
import { Modal } from 'components/Modal/Modal';

import femaleIcon from 'images/icons/modalAddsPet/female_icon.jpg';
import maleIcon from 'images/icons/modalAddsPet/male_icon.jpg';
import plusIcon from 'images/icons/modalAddsPet/plus.svg';

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
} from './style';

const ModalAddPet = props => {
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
  };
  const [step, setStep] = useState(1);
  const [values, setValues] = useState(initialState);

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
    console.log(values);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append('category', values.category);
    data.append('title', values.title);
    data.append('name', values.name);
    data.append('birthday', values.birthday);
    data.append('breed', values.breed);
    data.append('sex', values.sex);
    data.append('location', values.location);
    values.category === 'sell' && data.append('price', values.price);
    data.append('photoUrl', values.photoUrl[0]);
    data.append('comments', values.comments);

    for (var pair of data.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    dispatch(authOperations.addPet(data));
    props.setShow();
  };

  const stepChange = (...args) => {
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
                    values.category === 'lost/found' ? 'primary' : 'secondary'
                  }
                  value="lost/found"
                  onClick={e => handleChange(e)}
                >
                  lost/found
                </Button>
                <Button
                  name="category"
                  style={{ width: 'max-content', height: '35px' }}
                  buttonStyle={
                    values.category === 'In good hands'
                      ? 'primary'
                      : 'secondary'
                  }
                  value="In good hands"
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
                  onChange={e => handleChange(e)}
                  required
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="petName">Name pet</Label>
                <Input
                  id="petName"
                  name="name"
                  placeholder="Type pet name"
                  onChange={e => handleChange(e)}
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="petBirthday">Date of birth</Label>
                <Input
                  id="petBirthday"
                  name="birthday"
                  placeholder="Type date of birth"
                  onChange={e => handleChange(e)}
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="petBreed">Breed</Label>
                <Input
                  id="petBreed"
                  name="breed"
                  placeholder="Type breed"
                  onChange={e => handleChange(e)}
                />
              </InputContainer>
            </FormContainer>
            <FormButtonContainer>
              <Button onClick={() => stepChange(1)}>Next</Button>
              <Button buttonStyle="secondary" onClick={() => props.setShow()}>
                Cancel
              </Button>
            </FormButtonContainer>
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
                          ? 'grayscale(0%)'
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
                          ? 'grayscale(0%)'
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
                  required
                />
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
                    required
                  />
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
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="petComments">Comment</Label>
                <Textarea
                  rows={4}
                  id="petComments"
                  name="comments"
                  placeholder="Type comment"
                />
              </InputContainer>
            </FormContainer>
            <FormButtonContainer>
              <Button onClick={e => handleSubmit(e)}>Done</Button>
              <Button buttonStyle="secondary" onClick={() => stepChange(-1)}>
                Back
              </Button>
            </FormButtonContainer>
          </>
        )}
      </ModalForm>
    </Modal>
  );
};

export default ModalAddPet;
