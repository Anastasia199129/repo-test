const express = require('express');
const sequelize = require('./db');
require('dotenv').config();
const models = require('./models/models');

const PORT = process.env.PORT || 5000;
const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`server started on port: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();

// import React, { useContext, useState } from 'react';
// import { FramesContext } from 'Session/SessionScreen';
// import Close from '@material-ui/icons/Close';
// import classes from '../Session/SessionScreen.module.scss';
// import AgadoVideoService from 'services/AgadoVideoService';

// export const ChatModal = () => {
//   const { setChatVisibility } = useContext(FramesContext);
//   const [selectepParticipant, setselectedParticipant] = useState('');

//   useEffect(() => {
//     if (message === '') {
//       return;
//     }
//     async function createMessag() {
//       try {
//         let response = await fetch(url, {
//             method: 'POST',
//             body: JSON.stringify(message),
//             mode: 'cors',
//             header: {
//               authorization: `Bearer ${token}`,
//               'content-type': 'application/json',
//             },
//           }),
//           messag = await response.json();
//         console.log(messag);
//         return message;
//       } catch (error) {
//         console.log(error.message);
//       }
//     }

//     createMessag();
//   });

//   //   curl --request POST \
//   //      --url https://api.daily.co/v1/rooms \
//   //      --header 'authorization: Bearer INSERT_YOUR_TOKEN_HERE' \
//   //      --header 'content-type: application/json' \
//   //      --data '{"properties":{"enable_chat":true}}'

//   const onChangeMessage = e => {
//     setValue(e.currentTarget.value);
//   };

//   const onSubmitForm = e => {
//     e.preventDefault();
//     setMessage(value);
//     console.log('message: (', message, ') submit form');
//     setValue('');
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         height: '100%',
//       }}
//     >
//       <div className={classes.user__title}>
//         <h5>Chat</h5>
//         <Close onClick={() => setChatVisibility(false)} />
//       </div>
//       <div>
//         <div style={{ borderWidth: '1px 0', padding: '5px 0' }}>
//           <label>
//             To:
//             <select
//               value={selectepParticipant}
//               onChange={event => setselectedParticipant(event.target.value)}
//               style={{ color: '#000' }}
//               className="form-control"
//             >
//               <option style={{ color: '#000' }} value="">
//                 All
//               </option>

//               <option style={{ color: '#000' }} value="uuid-1">
//                 Simon
//               </option>
//               <option style={{ color: '#000' }} value="uuid-2">
//                 Jack
//               </option>
//             </select>
//           </label>
//         </div>
//         <div
//           style={{
//             display: 'flex',
//             width: '100%',
//             background: 'rgba(30,29,29,.9)',
//             padding: '10px',
//             justifyContent: 'space-between',
//             borderRadius: '10px',
//           }}
//         >
//           <form onSubmit={onSubmitForm}>
//             <textarea
//               name="message"
//               cols="30"
//               rows="3"
//               value={value}
//               style={{ width: '150px', padding: '10px', color: 'black' }}
//               placeholder="enter your message"
//               onChange={onChangeMessage}
//             />
//             <button
//               type="submit"
//               onClick={() => {
//                 if (selectepParticipant) {
//                   AgadoVideoService.sendPrivateMessage(selectepParticipant, message);
//                 } else {
//                   AgadoVideoService.sendMessage(message);
//                 }
//               }}
//               style={{
//                 background: '#f30f6c',
//                 cursor: 'pointer',
//                 padding: '10px 15px',
//                 borderRadius: '15px',
//               }}
//             >
//               SEND
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// От Елизавета Биличенко всем 06:50 PM
// make / do
// at the weekends
// amount of work
// deal with
// quit a work
// Everybody was in shock
// keep silence
// glad
// congratulate
// a little time
// show yourself
// a qualified worker
// От Елизавета Биличенко всем 07:16 PM
// Alice a car
// Alice'S car
// жив. + нежив.
// главное слово
// соединение
// сверка артиклей
// a girl     a car
// a girl's car
// a boy     a cat
// Bill    a cat
// Marry      a book
// a woman     a book
// a laptop     a mother
// От меня всем 07:18 PM
// a boi's cat
// Bill's cat
// Marry's book
// a woman's book
// A mother's laptop
// От Елизавета Биличенко всем 07:26 PM
// opinion
// My sister's name is Ann
// My sister's Ann
// My sister's a name
// be (is) / 3) has or has got
//
