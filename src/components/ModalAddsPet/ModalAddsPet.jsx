import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { AddsPetTitle } from './AddsPetTitle/AddsPetTitle';
import { AddsPetBtn } from './AddsPetBtn/AddsPetBtn';
import { AddsPetBtnOrange } from './AddsPetBtn/AddsPetBtnOrange/AddsPetBtnOrange';
import { DropdownGroup } from 'components/baseComponents/Dropdown/DropdownGroup';
import { Error } from '../AuthForm/style';
import plusIcon from '../../images/icons/modalAddsPet/plus.svg';
import {
  ModalAddsPetWrapper,
  ModalAddsPetForm,
  ModalAddsPetItputsWrapper,
  ModalAddsPetContainer,
  ModalAddsPetLabel,
  ModalAddsPetInput,
  ButtonWrapper,
  ModalAddsPetDescription,
  InputContainer,
  LabelPhotoInput,
  ImageContainer,
  ImagePlus,
  Image,
  PhotoInput,
  TextareaWrapper,
  ModalAddsPetTextarea,
} from './ModalAddsPet.styled';

export const ModalAddsPet = ({ onClose, onCloseBtn }) => {
  const dispatch = useDispatch();

  const initialState = {
    name: '',
    birthday: '',
    breed: '',
    photoUrl: '',
    comments: '',
  };

  const errorInitialState = {
    name: '',
    birthday: '',
    breed: '',
    comments: '',
  };

  const [state, setState] = useState(initialState);
  const [step, setStep] = useState(1);
  const [isError, setIsError] = useState(errorInitialState);
  const [startDate, setStartDate] = useState();
  const [dateError, setDateError] = useState(null);

  const handleChange = e => {
    const { value, type, name, files } = e.target;
    const newValue = type === 'file' ? files : value;
    if (type === 'file' && newValue.length === 0) return;
    setState(prevState => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const validation = e => {
    if (e.target.name === 'name') {
      state.name.length !== 0 &&
      (state.name.length < 2 || state.name.length > 16)
        ? setIsError({ ...isError, name: 'please type from 2 to 16 letters' })
        : setIsError({ ...isError, name: '', next: '' });
    }
    if (e.target.name === 'breed') {
      state.breed.length < 2 || state.breed.length > 24
        ? setIsError({ ...isError, breed: 'please type from 2 to 24 letters' })
        : setIsError({ ...isError, breed: '', next: '' });
    }
    if (e.target.name === 'comments') {
      state.comments.length < 8 || state.comments.length > 120
        ? setIsError({ ...isError, comments: 'from 8 to 120 letters' })
        : setIsError({ ...isError, comments: '', submit: '' });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    setIsError({ ...isError, submit: '' });

    Object.entries(isError).forEach(([key, value]) => {
      if (value !== '' && key !== 'submit')
        setIsError({ ...isError, submit: 'please put valid data' });
      return;
    });

    if (state.photoUrl === '' || state.comments === '' || isError.comments) {
      setIsError({ ...isError, submit: 'please put all data' });
      return;
    }

    const data = new FormData();
    data.append('name', state.name);
    data.append('birthday', startDate);
    data.append('breed', state.breed);
    data.append('photoUrl', state.photoUrl[0]);
    data.append('comments', state.comments);

    dispatch(authOperations.addPet(data));

    onClose();
  };

  const stepChange = (...args) => {
    if (step === 1) {
      setIsError({ ...isError, next: '' });
      if (
        state.name === '' ||
        state.breed === '' ||
        isError.name ||
        isError.breed ||
        dateError
      ) {
        setIsError({ ...isError, next: 'please put valid data' });
        return;
      }
    }
    setStep(prev => prev + args[0]);
  };

  return (
    <ModalAddsPetWrapper>
      <ModalAddsPetForm encType="multipart/form-data">
        {step === 1 && (
          <div>
            <AddsPetTitle onClick={onCloseBtn} />
            <ModalAddsPetItputsWrapper>
              <ModalAddsPetContainer>
                <ModalAddsPetLabel htmlFor="name">
                  Name pet<span style={{ color: 'red' }}>*</span>
                </ModalAddsPetLabel>
                <ModalAddsPetInput
                  maxLength={16}
                  value={state.name}
                  onChange={e => {
                    handleChange(e);
                    isError.name && validation(e);
                  }}
                  onBlur={e => validation(e)}
                  name="name"
                  placeholder="Type name pet"
                  id="name"
                />
                {isError.name && <Error>{isError.name}</Error>}
              </ModalAddsPetContainer>

              <ModalAddsPetContainer>
                <ModalAddsPetLabel htmlFor="birthday">
                  Date of birth<span style={{ color: 'red' }}>*</span>
                </ModalAddsPetLabel>
                <DropdownGroup
                  date={startDate}
                  setState={setStartDate}
                  setDateError={setDateError}
                  height="150px"
                />
                {dateError && <Error>{dateError}</Error>}
              </ModalAddsPetContainer>

              <ModalAddsPetContainer>
                <ModalAddsPetLabel htmlFor="breed">
                  Breed <span style={{ color: 'red' }}>*</span>
                </ModalAddsPetLabel>
                <ModalAddsPetInput
                  maxLength={24}
                  value={state.breed}
                  onChange={e => {
                    handleChange(e);
                    isError.breed && validation(e);
                  }}
                  onBlur={e => validation(e)}
                  name="breed"
                  placeholder="Type breed"
                  id="breed"
                />
                {isError.breed && <Error>{isError.breed}</Error>}
              </ModalAddsPetContainer>
            </ModalAddsPetItputsWrapper>

            <ButtonWrapper>
              <AddsPetBtnOrange type="button" onClick={() => stepChange(1)}>
                Next{isError.next && <Error>{isError.next}</Error>}
              </AddsPetBtnOrange>
              <AddsPetBtn onClick={onCloseBtn}>Cancel</AddsPetBtn>
            </ButtonWrapper>
          </div>
        )}

        {step === 2 && (
          <div>
            <AddsPetTitle onClick={onCloseBtn} />

            <ModalAddsPetDescription>
              Add photo and some comments<span style={{ color: 'red' }}>*</span>
            </ModalAddsPetDescription>

            <InputContainer>
              <LabelPhotoInput htmlFor="photoUrl">
                <ImageContainer>
                  <ImagePlus src={plusIcon} alt="add"></ImagePlus>
                  {state.photoUrl && (
                    <Image
                      src={URL.createObjectURL(state.photoUrl[0])}
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
                id="photoUrl"
                name="photoUrl"
                accept=".gif,.jpg,.jpeg,.png"
              />
            </InputContainer>

            <TextareaWrapper>
              <ModalAddsPetLabel htmlFor="comments">
                Comments<span style={{ color: 'red' }}>*</span>
              </ModalAddsPetLabel>
              <ModalAddsPetTextarea
                maxLength={120}
                rows={4}
                value={state.comments}
                onChange={e => {
                  handleChange(e);
                  isError.comments && validation(e);
                }}
                onBlur={e => validation(e)}
                name="comments"
                placeholder="Type comments"
                id="comments"
              />
              {isError.comments && <Error>{isError.comments}</Error>}
            </TextareaWrapper>

            <ButtonWrapper>
              <AddsPetBtnOrange type="submit" onClick={e => handleSubmit(e)}>
                Done {isError.submit && <Error>{isError.submit}</Error>}
              </AddsPetBtnOrange>
              <AddsPetBtn onClick={() => stepChange(-1)}>Back</AddsPetBtn>
            </ButtonWrapper>
          </div>
        )}
      </ModalAddsPetForm>
    </ModalAddsPetWrapper>
  );
};
