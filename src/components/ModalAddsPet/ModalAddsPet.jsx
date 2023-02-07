import { useState } from 'react';
import { AddsPetTitle } from './AddsPetTitle/AddsPetTitle';
import { AddsPetBtn } from './AddsPetBtn/AddsPetBtn';
import { AddsPetBtnOrange } from './AddsPetBtn/AddsPetBtnOrange/AddsPetBtnOrange';
// import { ReactComponent as Plus } from '../../images/icons/modalAddsPet/plus.svg'
import {
  ModalAddsPetWrapper,
  FirstPageAddsPetForm,
  SecondPageAddsPetForm,
  ModalAddsPetItputsWrapper,
  ModalAddsPetContainer,
  ModalAddsPetLabel,
  ModalAddsPetInput,
  ModalAddsPetDescription,
  ModalAddsPetPlusWrapper,
  ModalAddsPetPlusInput,
  PlusStyled,
  ModalAddsPetTextarea,
} from './ModalAddsPet.styled';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

export const ModalAddsPet = ({ onClose, onCloseBtn }) => {
  const dispatch = useDispatch();
  const [firstPageHide, setFirstPageHide] = useState(true);
  const [secondPageHide, setSecondPageHide] = useState(false);

  const clickNextHandle = () => {
    setFirstPageHide(false);
    setSecondPageHide(true);
  };

  const clickBackHandle = () => {
    setFirstPageHide(true);
    setSecondPageHide(false);
  };

  const initialState = {
    name: '',
    date: '',
    breed: '',
    photoUrl: '',
    comments: '',
  };

  const [state, setState] = useState(initialState);

  // const data = new FormData()
  // console.log('data', data )

  const handleChange = e => {
    // console.log('e.target1', e.target)
    const { value, type, name, files } = e.target;
    const newValue = type === 'files' ? files[0] : value;

    setState(prevState => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  //   console.log('state2', state)

  const handleSubmit = e => {
    e.preventDefault();
    // const form = e.currentTarget;
    // const name = form.elements.name.value;
    // const photo = form.elements.photoUrl.value;
    // console.log('e.target2', e.currentTarget.elements)
    // console.log('name', name)
    // console.log('photo', photo)
    const data = new FormData();
    data.append('name', state.name);
    data.append('date', state.date);
    data.append('breed', state.breed);
    data.append('photoUrl', state.photoUrl);
    data.append('comments', state.comments);

    for (var pair of data.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    dispatch(authOperations.addPet(data));

    // dispatch(authOperations.addPet(state))
    // setState(initialState)
    onClose();
  };

  const patternName =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
  const patternDate = /\d{4}-\d{2}-\d{2}/;
  const patterBreed =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

  return (
    <ModalAddsPetWrapper>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        {firstPageHide && (
          <FirstPageAddsPetForm>
            <AddsPetTitle onClick={onCloseBtn} />

            <ModalAddsPetItputsWrapper>
              <ModalAddsPetContainer>
                <ModalAddsPetLabel htmlFor="name">Name pet</ModalAddsPetLabel>
                <ModalAddsPetInput
                  value={state.name}
                  onChange={handleChange}
                  name="name"
                  type="text"
                  placeholder="Type name pet"
                  pattern={patternName}
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  id="name"
                  required
                />
              </ModalAddsPetContainer>

              <ModalAddsPetContainer>
                <ModalAddsPetLabel htmlFor="date">
                  Date of birth
                </ModalAddsPetLabel>
                <ModalAddsPetInput
                  value={state.date}
                  onChange={handleChange}
                  name="date"
                  type="text"
                  placeholder="Type date of birth"
                  min="1990-01-01"
                  max={new Date()}
                  //pattern={patternDate}
                  title="Date may contain only format 0000-00-00 and up-to-date"
                  id="date"
                  required
                />
              </ModalAddsPetContainer>

              <ModalAddsPetContainer>
                <ModalAddsPetLabel htmlFor="breed">Breed</ModalAddsPetLabel>
                <ModalAddsPetInput
                  value={state.breed}
                  onChange={handleChange}
                  name="breed"
                  type="text"
                  placeholder="Type breed"
                  pattern={patterBreed}
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  id="breed"
                  required
                />
              </ModalAddsPetContainer>
            </ModalAddsPetItputsWrapper>

            <AddsPetBtnOrange
              titleBtn="Next"
              type="button"
              onClick={clickNextHandle}
            />
            <AddsPetBtn titleBtn="Cancel" type="button" onClick={onCloseBtn} />
          </FirstPageAddsPetForm>
        )}

        {secondPageHide && (
          <SecondPageAddsPetForm>
            <AddsPetTitle onClick={onCloseBtn} />

            <ModalAddsPetDescription>
              Add photo and some comments
            </ModalAddsPetDescription>

            <ModalAddsPetPlusWrapper>
              <label htmlFor="photoUrl"></label>
              <PlusStyled />
              <ModalAddsPetPlusInput
                value={state.photoUrl}
                onChange={handleChange}
                // value={state.file} onChange={handleChange}
                type="file"
                name="photoUrl"
                accept=".png, .jpg, .jpeg"
                id="photoUrl"
              />
            </ModalAddsPetPlusWrapper>

            <ModalAddsPetLabel>Comments</ModalAddsPetLabel>
            <ModalAddsPetTextarea
              value={state.comments}
              onChange={handleChange}
              name="comments"
              placeholder="Type comments"
            ></ModalAddsPetTextarea>

            <AddsPetBtnOrange titleBtn="Done" type="submit" />
            <AddsPetBtn
              titleBtn="Back"
              type="button"
              onClick={clickBackHandle}
            />
          </SecondPageAddsPetForm>
        )}
      </form>
    </ModalAddsPetWrapper>
  );
};
