import { useState } from "react";
import { AddsPetTitle } from './AddsPetTitle/AddsPetTitle'
import { AddsPetBtn } from "./AddsPetBtn/AddsPetBtn";
import { DropdownGroup } from 'components/baseComponents/Dropdown/DropdownGroup'
import { AddsPetBtnOrange } from "./AddsPetBtn/AddsPetBtnOrange/AddsPetBtnOrange";
import plusIcon from '../../images/icons/modalAddsPet/plus.svg'
import { ModalAddsPetWrapper, ModalAddsPetForm, FirstPageAddsPetForm, SecondPageAddsPetForm,
    ModalAddsPetItputsWrapper, ModalAddsPetContainer, ModalAddsPetLabel, ModalAddsPetInput,
    ModalAddsPetDescription, InputContainer, LabelPhotoInput,
    ImageContainer, ImagePlus, Image,
    PhotoInput, ButtonWrapper, ModalAddsPetTextarea
 } from './ModalAddsPet.styled'
import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";

export const ModalAddsPet = ({onClose, onCloseBtn}) => {
    const dispatch = useDispatch()
    const [startDate, setStartDate] = useState();
    const [firstPageHide, setFirstPageHide] = useState(true)
    const [secondPageHide, setSecondPageHide] = useState(false)
    
    const clickNextHandle = () => {
        setFirstPageHide(false)
        setSecondPageHide(true)
    }

    const clickBackHandle = () => {
        setFirstPageHide(true)
        setSecondPageHide(false)
    }

    const initialState = {
        name: '',
        birthday: '',
        breed: '',
        photoUrl: '',
        comments: '',
    }

    const patternName=/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/
    // const patternDate=/\d{4}-\d{2}-\d{2}/
    const patterBreed = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/

    
    const [state, setState] = useState(initialState);

    const handleChange = e => {
        const { value, type, name, files } = e.target;
        const newValue = type === 'file' ? files : value;
    
        setState(prevState => ({
        ...prevState,
        [name]: newValue, 
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData()
        await data.append('name', state.name)
        data.append('birthday', startDate);
        await data.append('breed', state.breed)
        await data.append('photoUrl', state.photoUrl[0])
        await data.append('comments', state.comments)
        dispatch(authOperations.addPet(data))
        onClose();
    }

    return(
        <ModalAddsPetWrapper>
            
            <ModalAddsPetForm encType="multipart/form-data" onSubmit={handleSubmit}>

                {firstPageHide && (
                    <FirstPageAddsPetForm>

                    <AddsPetTitle onClick={onCloseBtn}/>

                   <ModalAddsPetItputsWrapper>
                   <ModalAddsPetContainer>
                   <ModalAddsPetLabel htmlFor="name">Name pet</ModalAddsPetLabel>
                      <ModalAddsPetInput
                        value={state.name} onChange={handleChange}
                        name='name'
                        type='text'
                        placeholder='Type name pet'
                        pattern={patternName}
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        id="name"
                        required
                       /> 
                       {/* {!isValid && <p>Name may contain only letters</p>} */}
                   </ModalAddsPetContainer>
      
                    <ModalAddsPetContainer>
                    <ModalAddsPetLabel htmlFor="birthday">Date of birth</ModalAddsPetLabel>
                    <DropdownGroup date={startDate} setState={setStartDate} height={'150px'}/>
                   
                    </ModalAddsPetContainer>
      
                    <ModalAddsPetContainer>
                     <ModalAddsPetLabel htmlFor="breed">Breed</ModalAddsPetLabel>
                      <ModalAddsPetInput
                        value={state.breed} onChange={handleChange}
                        name='breed'
                        type='text'
                        placeholder='Type breed'
                        pattern={patterBreed}
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        id="breed"
                        required
                       /> 
                    </ModalAddsPetContainer>
                   </ModalAddsPetItputsWrapper>

                    <ButtonWrapper>
                    <AddsPetBtnOrange titleBtn='Next' type='button' onClick={clickNextHandle} />
                    <AddsPetBtn titleBtn='Cancel' type='button' onClick={onCloseBtn} />
                    </ButtonWrapper>
      
                    </FirstPageAddsPetForm>
                )}
              
              {secondPageHide && (
                  <SecondPageAddsPetForm >

                    <AddsPetTitle onClick={onCloseBtn}/>

                    <ModalAddsPetDescription>Add photo and some comments</ModalAddsPetDescription>
    
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
                            onChange={e => {handleChange(e)}}
                            type="file"
                            id="photoUrl"
                            name="photoUrl"
                            accept=".gif,.jpg,.jpeg,.png"
                        />
                    </InputContainer>                 

                        <ModalAddsPetLabel>Comments</ModalAddsPetLabel>
                        <ModalAddsPetTextarea   
                            value={state.comments} onChange={handleChange}
                            name="comments"
                            placeholder="Type comments"
                            required>
                        </ModalAddsPetTextarea>

                    <ButtonWrapper>
                    <AddsPetBtnOrange titleBtn='Done' type="submit" />
                    <AddsPetBtn titleBtn='Back' type="button" onClick={clickBackHandle} />
                    </ButtonWrapper>      
                  </SecondPageAddsPetForm>
              )}
            </ModalAddsPetForm>
        </ModalAddsPetWrapper>
    )
}

