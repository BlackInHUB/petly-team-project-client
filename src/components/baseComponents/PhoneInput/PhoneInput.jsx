// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// import {
//     PhoneInputStyled
// } from './style';

// const PhoneInput = ({phoneNumber, setPhoneNumber}) => {
//     const phoneRegExp = /^\+\d{7,15}$/;

//   const [isPhoneValid, setPhoneIsValid] = useState(null);

//   const phoneValidation = () => {
//     return phoneRegExp.test(`+${phoneNumber}`);
//   };

//   const onBlurPhone = () => {
//     phoneValidation()
//       ? setPhoneIsValid(null)
//       : setPhoneIsValid('incorrect phone number');
//   };

//   return (
//     <div>
//       <PhoneInputStyled
//         inputProps={{
//             id: 'phone',
//           }}
//         autoComplete="off"
//         name="phone"
//         onBlur={() => onBlurPhone()}

//         value={phoneNumber}
//         onChange={value => setPhoneNumber(value)}
//         country={'ua'}
//         placeholder="Mobile phone"

//       />

//         {isPhoneValid ? <p>{isPhoneValid}</p> : null}
//     </div>
//   );
// };

// PhoneInput.propTypes = {
//     phoneNumber: PropTypes.string.isRequired,
//     setPhoneNumber: PropTypes.func.isRequired,

// };

// export default PhoneInput;
