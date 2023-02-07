
import { useState } from "react";
import { AddsPetTitle } from './AddsPetTitle/AddsPetTitle'
import { AddsPetBtn } from "./AddsPetBtn/AddsPetBtn";
import { AddsPetBtnOrange } from "./AddsPetBtn/AddsPetBtnOrange/AddsPetBtnOrange";
import { ModalAddsPetWrapper, FirstPageAddsPetForm, SecondPageAddsPetForm,
    ModalAddsPetItputsWrapper, ModalAddsPetContainer, ModalAddsPetLabel, ModalAddsPetInput,
    ModalAddsPetDescription, ModalAddsPetPlusWrapper, ModalAddsPetPlusInput, PlusStyled, ModalAddsPetTextarea
 } from './ModalAddsPet.styled'
import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";

export const ModalAddsPet = ({onClose, onCloseBtn}) => {
    const dispatch = useDispatch()
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
        date: '',
        breed: '',
        photoUrl: '',
        comments: '',
    }

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
        await data.append('date', state.date)
        await data.append('breed', state.breed)
        await data.append('photoUrl', state.photoUrl[0])
        await data.append('comments', state.comments)
        dispatch(authOperations.addPet(data))
        onClose();
    }


    const patternName=/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/
    const patternDate=/\d{4}-\d{2}-\d{2}/
    const patterBreed = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/

    return(
        <ModalAddsPetWrapper>
            
            <form encType="multipart/form-data" onSubmit={handleSubmit}>

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
                   </ModalAddsPetContainer>
      
                    <ModalAddsPetContainer>
                    <ModalAddsPetLabel htmlFor="date">Date of birth</ModalAddsPetLabel>
                      <ModalAddsPetInput
                        value={state.date} onChange={handleChange}
                        name='date'
                        type='text'
                        placeholder='Type date of birth'
                        min="1990-01-01"
                        max={new Date()}
                        pattern={patternDate}
                        title="Date may contain only format 0000-00-00 and up-to-date"
                        id="date"
                        required
                       />  
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

                    <AddsPetBtnOrange titleBtn='Next' type='button' onClick={clickNextHandle} />
                    <AddsPetBtn titleBtn='Cancel' type='button' onClick={onCloseBtn} />
      
                    </FirstPageAddsPetForm>
                )}
              
              {secondPageHide && (
                  <SecondPageAddsPetForm >

                    <AddsPetTitle onClick={onCloseBtn}/>

                    <ModalAddsPetDescription>Add photo and some comments</ModalAddsPetDescription>
    
                        
                        <ModalAddsPetPlusWrapper>
                            <label htmlFor="photoUrl"></label>
                            {state.photoUrl === '' ?
                            (<>
                            <PlusStyled />
                            <ModalAddsPetPlusInput
                            onChange={handleChange}
                            type="file"
                            name="photoUrl"
                            accept=".png, .jpg, .jpeg"
                            id="photoUrl"
                            />
                            </>) :
                            (<img src={`${URL.createObjectURL(state.photoUrl[0])}`} alt=''/>)
                            }
                        </ModalAddsPetPlusWrapper>
                       
    
                        <ModalAddsPetLabel>Comments</ModalAddsPetLabel>
                        <ModalAddsPetTextarea   
                            value={state.comments} onChange={handleChange}
                            name="comments"
                            placeholder="Type comments">
                        </ModalAddsPetTextarea>
                            
                    <AddsPetBtnOrange titleBtn='Done' type="submit" />
                    <AddsPetBtn titleBtn='Back' type="button" onClick={clickBackHandle} />
                  </SecondPageAddsPetForm>
              )}
            </form>
        </ModalAddsPetWrapper>
    )
}

