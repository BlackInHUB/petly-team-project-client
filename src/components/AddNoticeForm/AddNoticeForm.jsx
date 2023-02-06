import { useState } from 'react'
import React from 'react'
import { ReactComponent as CloseBtn } from '../../images/icons/addNotice/close.svg'
import { ReactComponent as MaleIcon } from '../../images/icons/addNotice/male.svg'
import { ReactComponent as FemaleIcon } from '../../images/icons/addNotice/female.svg'
import { ReactComponent as AddPhoto } from '../../images/icons/addNotice/plus.svg'
import css from './style.module.css'

const hideStyle = {
        opacity: 0,
        position: "fixed",
        width: 0,
        zIndex: -1,
    }

export default function AddNoticeForm() {
    const [firstPageHide, setFirstPageHide] = useState(false);
    const [secondPageHide, setSecondPageHide] = useState(true);
    const [goodHand, setGoodHand] = useState(false);
    const [typeOfAdd, setTypeOfAdd] = useState('');
    const [titleOfAdd, setTitleOfAdd] = useState('');
    const [namePet, setNamePet] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [breed, setBreed] = useState('');
    const [sex, setSex] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [comments, setComments] = useState('');

    const noticeData = {
        typeOfAdd,
        titleOfAdd,
        namePet,
        dateOfBirth,
        breed,
        sex,
        location,
        price,
        comments,
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(noticeData)
    }

    const handleChange = event => {
        const { name, value } = event.currentTarget
    
    switch (name) {
        case 'noticeType':
            setTypeOfAdd(value);
            break;
        case 'titleNotice':
            setTitleOfAdd(value);
            break;
        case 'petName':
            setNamePet(value);
            break;
        case 'petBirth':
            setDateOfBirth(value);
            break;
        case 'petBreed':
            setBreed(value);
            break;
        case 'sex':
            setSex(value);
            break;
        case 'location':
            setLocation(value);
            break;
        case 'price':
            setPrice(value);
            break;
        case 'comments':
            setComments(value);
            break;
        default:
            return;
        };
    };


    const clickNextHandle = () => {
        setFirstPageHide(true);
        setSecondPageHide(false)
    }

    const clickBackHandle = () => {
        setFirstPageHide(false);
        setSecondPageHide(true)
    }

    const clickGoodHandOrLostHandle = () => {
        setGoodHand(true)
    }

    const clickSaleHandle = () => {
        setGoodHand(false)
    }

    return (
        <div className={css.noticeFormWrapper}>
            <h2 className={css.formName}>Add pet</h2>
            <form onSubmit={handleSubmit}>
                <div id='firstPage' style={firstPageHide ? hideStyle : {}}>
                    <p className={css.textNotice}>Fill in all mandatory fields of the form to place an ad</p>
                    <div className={css.radioBtnTypeBox}>
                        <input style={hideStyle} type="radio" id='lostFound' name='noticeType' value='lostFound' onClick={clickGoodHandOrLostHandle} onChange={handleChange} />
                        <label className={css.radioBtnTitle} htmlFor='lostFound'>lost/found</label>   
                        <input style={hideStyle} type="radio" id='goodHands' name='noticeType' value='goodHands' onClick={clickGoodHandOrLostHandle} onChange={handleChange}/>
                        <label className={css.radioBtnTitle} htmlFor='goodHands'>in good hands</label>   
                        <input style={hideStyle} type="radio" id='sell' name='noticeType' value='sell' onClick={clickSaleHandle} onChange={handleChange}/>
                        <label className={css.radioBtnTitle} htmlFor='sell'>sell</label>
                    </div>                    
                    
                    <label className={css.labelName} htmlFor='titleNotice'>Title of ad<span className={css.mandatory}>*</span>:</label>
                    <input className={css.inputForm} id='titleNotice' name='titleNotice' placeholder='Type name pet' type='text' required onChange={handleChange}/>
                    <label className={css.labelName} htmlFor='petName'>Name pet:</label>
                    <input className={css.inputForm} id='petName' name='petName' placeholder='Type name pet' type='text' onChange={handleChange}/>
                    <label className={css.labelName} htmlFor='petBirth'>Date of birth:</label>
                    <input className={css.inputForm} id='petBirth' name='petBirth' placeholder='Type date of birth' type='text' onChange={handleChange}/>
                    <label className={css.labelName} htmlFor='petBreed'>Breed:</label>
                    <input className={css.inputForm} id='petBreed' name='petBreed' placeholder='Type breed' type='text' onChange={handleChange}/>
                </div>
                <div id='secondPage' style={secondPageHide ? hideStyle : {}}>
                    <p className={css.sexLabel}>The sex<span className={css.mandatory}>*</span>:</p>

                    <div className={css.radioBtnSexBox}>
                        <input style={hideStyle} name='sex' id='male' type="radio" onChange={handleChange}/> 
                        <label className={css.sexBtn} htmlFor='male'>
                            <MaleIcon className={css.sexIcon}/>
                            Male
                        </label>  
                        <input style={hideStyle} name='sex' id='female' type="radio" onChange={handleChange}/> 
                        <label className={css.sexBtn} htmlFor='female'>
                            <FemaleIcon className={css.sexIcon}/>
                            Female
                        </label>  
                    </div>

                    <label className={css.labelName} htmlFor='location'>Location<span className={css.mandatory}>*</span>:</label>
                    <input className={css.inputForm} id='location' name='location' placeholder='Type location' type='text' required onChange={handleChange}/>

                    {!goodHand && <><label className={css.labelName} htmlFor='price'>Price<span className={css.mandatory}>*</span>:</label>
                    <input className={css.inputForm} id='price' name='price' placeholder='Type name pet' type='text' required onChange={handleChange}/></>}
                    
                    <p className={css.labelName}>Load the pet's image</p>
                    <div className={css.photoContainer}>
                        <label htmlFor='petPhoto' className={css.petPhoto}>
                            <AddPhoto className={css.photoNoticeIcon} />
                        </label>
                        <input className={css.photoNoticeFile} id='petPhoto' name='petPhoto' type='file' accept=".jpg, .jpeg, .png"/>
                    
                    </div>
                    <label className={css.labelName} htmlFor='comments'>Comments</label>
                    <textarea className={css.noticeComments} id='comments' placeholder='Type comments' name='comments' onChange={handleChange}/>
                </div>
                <div id='firstPage' style={firstPageHide ? hideStyle : {}} className={css.btnGroup}>
                    <button id='toggleBtn'className={css.orangeBtn} type='button' onClick={clickNextHandle}>Next</button>
                    <button className={css.whiteBtn} type='button'>Cancel</button>
                </div>
                <div id='secondPage' style={secondPageHide ? hideStyle : {}} className={css.btnGroup}>
                    <button className={css.orangeBtn} type='submit'>Done</button>
                    <button id='toggleBtn'className={css.whiteBtn} type='button' onClick={clickBackHandle}>Back</button>
                </div>

                <button className={css.closeModalBtn} type='button'>
                    <CloseBtn className={css.closeIcon} />
                </button>
            </form>
            
        </div>
    )
}