import { useState } from "react";
import { AddsPetTitle } from './AddsPetTitle/AddsPetTitle'
import { AddsPetBtn } from "./AddsPetBtn/AddsPetBtn";
import { ModalAddsPetWrapper, FirstPageAddsPetForm, SecondPageAddsPetForm,
    ModalAddsPetItputsWrapper, ModalAddsPetContainer, ModalAddsPetLabel, ModalAddsPetInput
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
        photo: '',
        comments: '',
    }

    const [state, setState] = useState(initialState);

    const data = new FormData()
        // console.log('data', data )

    const handleChange = e => {
        const { value, type, name, files } = e.target;
        const newValue = type === 'files' ? files[0] : value;
    
        setState(prevState => ({
          ...prevState,
          [name]: newValue,
        }));
      };

    //   console.log('state2', state)

    const handleSubmit = (e) => {
        e.preventDefault();
    
        data.append('name', state.name)
        data.append('date', state.date)
        data.append('breed', state.breed)
        data.append('photoUrl', state.photo)
        data.append('comments', state.comments)

        dispatch(authOperations.addPet(data))
    
        // dispatch(authOperations.addPet(state))
        // setState(initialState)
        onClose();
    }


    const patternName=/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/
    const patternDate=/\d{4}-\d{2}-\d{2}/
    const patterBreed = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/

    return(
        <ModalAddsPetWrapper>
            
            <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>

                {firstPageHide && (
                    <FirstPageAddsPetForm>

                    <AddsPetTitle onClick={onCloseBtn}/>

                   <ModalAddsPetItputsWrapper>
                   <ModalAddsPetContainer>
                   <ModalAddsPetLabel>Name pet</ModalAddsPetLabel>
                      <ModalAddsPetInput
                        value={state.name} onChange={handleChange}
                        name='name'
                        type='text'
                        placeholder='Type name pet'
                        pattern={patternName}
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                       /> 
                   </ModalAddsPetContainer>
      
                    <ModalAddsPetContainer>
                    <ModalAddsPetLabel>Date of birth</ModalAddsPetLabel>
                      <ModalAddsPetInput
                        value={state.date} onChange={handleChange}
                        name='date'
                        type='date'
                        placeholder='Type date of birth'
                        min="1990-01-01"
                        max={new Date()}
                        pattern={patternDate}
                        title="Date may contain only format 0000-00-00 and up-to-date"
                        required
                       />  
                    </ModalAddsPetContainer>
      
                    <ModalAddsPetContainer>
                     <ModalAddsPetLabel>Breed</ModalAddsPetLabel>
                      <ModalAddsPetInput
                        value={state.breed} onChange={handleChange}
                        name='breed'
                        type='text'
                        placeholder='Type breed'
                        pattern={patterBreed}
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                       /> 
                    </ModalAddsPetContainer>
                   </ModalAddsPetItputsWrapper>

                    <AddsPetBtn titleBtn='Next' type='button' onClick={clickNextHandle} />
                    <AddsPetBtn titleBtn='Cancel' type='button' onClick={onCloseBtn} />
      
                    </FirstPageAddsPetForm>
                )}
              
              {secondPageHide && (
                  <SecondPageAddsPetForm >

                    <AddsPetTitle onClick={onCloseBtn}/>

                    <p>Add photo and some comments</p>
    
                        <label></label>
                        <input 
                            value={state.photo} onChange={handleChange}
                            // value={state.file} onChange={handleChange}
                            type="file"
                            name="photo"
                            accept=".png, .jpg, .jpeg"
                        />
    
                        <ModalAddsPetLabel>Comments</ModalAddsPetLabel>
                        <textarea   
                            value={state.comments} onChange={handleChange}
                            name="comments"
                            placeholder="Type comments">
                        </textarea>
                            
                    <button type="submit">Done</button>
                    <button type="button" onClick={clickBackHandle}>Back</button>
                  </SecondPageAddsPetForm>
              )}

            
                 
            </form>
        </ModalAddsPetWrapper>
    )
}