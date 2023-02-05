import { useState } from "react";
import { AddsPetTitle } from './AddsPetTitle/AddsPetTitle'
import { AddsPetBtn } from "./AddsPetBtn/AddsPetBtn";
import { FirstPageAddsPetForm, SecondPageAddsPetForm } from './ModalAddsPet.styled'

export const ModalAddsPet = ({onCloseBtn}) => {
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
        // file: null,
        comments: '',
    }

    const [state, setState] = useState(initialState);

    const handleChange = e => {
        const { value, type, name, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
    
        setState(prevState => ({
          ...prevState,
          [name]: newValue,
        }));
      };

    const patternName=/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/
    const patternDate=/\d{4}-\d{2}-\d{2}/
    const patterBreed = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/

    return(
        <div>
            
            <form>

                {firstPageHide && (
                    <FirstPageAddsPetForm>

                    <AddsPetTitle onClick={onCloseBtn}/>

                    <label>Name pet</label>
                      <input 
                        value={state.name} onChange={handleChange}
                        name='name'
                        type='text'
                        placeholder='Type name pet'
                        pattern={patternName}
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                       /> 
      
                      <label>Date of birth</label>
                      <input 
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
      
                      <label>Breed</label>
                      <input 
                        value={state.breed} onChange={handleChange}
                        name='breed'
                        type='text'
                        placeholder='Type breed'
                        pattern={patterBreed}
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                       /> 

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
                            // value={state.file} onChange={handleChange}
                            type="file"
                            name="photo"
                            accept=".png, .jpg, .jpeg"
                            required
                        />
    
                        <label>Comments</label>
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
        </div>
    )
}