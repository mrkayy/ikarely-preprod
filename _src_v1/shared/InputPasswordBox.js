// import React, {useState} from 'react'
// import './InputPasswordBox.css'
// import InputBox from './InputBox'
// import eye from '../utils/assets/images/eye.svg'
// import closeEye from '../utils/assets/images/closeEye.svg'

// function InputPasswordBox({label, name}) {

//     const [passwordType, setpasswordType] = useState(true);
//     const togglePassword = () => {
//       setpasswordType(!passwordType);
//     };

//     return (
//         <div className="password__input">
//             <img
//               src={passwordType ? eye : closeEye}
//               alt=""
//               className="password__icon"
//               onClick={togglePassword}
//             />

//             <InputBox
//               label={label}
//               name={name}
//               type={passwordType ? "password" : "text"}
//             />
//           </div>
//     )
// }

// export default InputPasswordBox
