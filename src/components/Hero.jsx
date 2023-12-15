
import { React, useState } from "react";
import styled from "styled-components";
import '../i18next'
import homeImage from "../assets/mainBackground.jpg";
import Navbar from "./Navbar2";
import { TextField } from "@material-ui/core";
import { DatePicker, TimePicker ,DesktopTimePicker} from "@mui/x-date-pickers";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { format } from 'date-fns';

import ReactFlagsSelect from "react-flags-select";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import dateFormat, { masks } from "dateformat";


export default function Hero() {

  const [currenAddress, setCurrentAddress] = useState('');
  const [desiredAdress, setdesiredAdress] = useState('');
  const [items, setItems] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');


  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  function handleSendClick() {
    const formattedDate=dateFormat(selectedDate, "d, m, yyyy");
    const formattedTime=dateFormat(selectedTime, "h:MM TT");

    const whatsAppMessage=`
    ${currenAddress}
    \n
    ${desiredAdress}
    \n

    ${items}
    \n

    ${formattedDate}
    \n

    ${formattedTime}
    \n

    `;

    const phoneNumber = '+4915750962657'; // Replace with the recipient's phone number
    const messageText = encodeURIComponent("");
    const link = `https://wa.me/${phoneNumber}?text=${whatsAppMessage}`;
    window.open(link, '_blank');
  }
  function handleSendClickGmail() {
    const formattedDate=dateFormat(selectedDate, "d, m, yyyy");
    const formattedTime=dateFormat(selectedTime, "h:MM TT");

    const whatsAppMessage=`
    ${currenAddress}
    \n
    ${desiredAdress}
    \n

    ${items}
    \n

    ${formattedDate}
    \n

    ${formattedTime}
    \n

    `;
    const recipientEmail = 'jadmaxumzugsservice@gmail.com'; // Replace with the recipient's email address
    const subject = encodeURIComponent(''); // Replace with your subject text
    const body = encodeURIComponent(''); // Replace with your body text
    const link = `https://mail.google.com/mail/?view=cm&to=${recipientEmail}&su=jad umzugs&body=${whatsAppMessage}`;
    window.open(link, '_blank');
  }

  function disableDates(date2) {
    const date = new Date(date2)

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // تعطيل التواريخ قبل اليوم
    if (date < today) {
      return true;
    }
    const dateStrings = ['2023-10-03', '2023-09-29'];

    const dateObjects = dateStrings.map(dateString => new Date(dateString));


    // تعطيل تواريخ محددة
    for (var i in dateObjects) {
      const d = new Date(i)
      if (date.getFullYear() === 2023 && date.getMonth() === 9) {
        if (date.getDate() === 28 || date.getDate() === 27) {
          return true;
        }
      }
    }

    return false;
  };


  return (
    <Section id="hero">
      <div className="background">
        <img className="backImg" src={homeImage} alt="" />

      </div>

      <div className="content">
        <div className="navW">
          <Navbar />
        </div>
        <div className="formContainer">
          <div className="title">
            <h1> {t('welcome_message')}</h1>

          </div>
          <div className="search">
            <div className="container">


              <label htmlFor="">{t('first_q')}</label>
              <TextField
                value={currenAddress}
                onChange={(e) => setCurrentAddress(e.target.value)}
                variant="outlined"
                InputProps={{
                  style: {
                    height: '32px', // set the height of the input
                    border: '1px solid #ccc', // set the border
                    borderRadius: '4px', // set the border radius
                    padding: '4px 8px', // set the padding
                  },
                }}
              />
              <label htmlFor="">{t('second_q')}</label>
              <TextField
                value={desiredAdress}
                onChange={(e) => setdesiredAdress(e.target.value)}
                variant="outlined"
                InputProps={{
                  style: {
                    height: '32px', // set the height of the input
                    border: '1px solid #ccc', // set the border
                    borderRadius: '4px', // set the border radius
                    padding: '4px 8px', // set the padding
                  },
                }}
              />
              <label htmlFor="">{t('third_q')}</label>


              <TextField
                value={items}
                onChange={(e) => setItems(e.target.value)}
                variant="outlined"
                multiline={true}
                InputProps={{
                  style: {
                    height: '90px', // set the height of the input
                    border: '1px solid #ccc', // set the border
                    borderRadius: '4px', // set the border radius
                  },
                }}
              />


              <label htmlFor="">{t('choose_data')}

              </label>
              <DatePicker
                value={selectedDate}
                onChange={(date) => {

                  setSelectedDate(date);

                }}
                  format="DD-MM-YYYY"

                sx={{
                  '& .MuiInputBase-root': {
                    height: '32px',
                    border: '1px solid #ccc', // set the border
                    borderRadius: '4px', // set the border radius
                    padding: '4px 8px', // 
                    width: '12rem'
                  },
                }}              ></DatePicker>
              <label htmlFor="">{t('choose_time')}
              </label>
              <DesktopTimePicker
              value={selectedTime}
              onChange={(time) => {

                setSelectedTime(time);
            
              }}
              ampm={false}
                sx={{
                  '& .MuiInputBase-root': {
                    height: '32px',
                    border: '1px solid #ccc', // set the border
                    borderRadius: '4px', // set the border radius
                    padding: '4px 8px', // 
                    width: '12rem'
                  },
                }}
              ></DesktopTimePicker>
            </div>




            <div className="btns">
              <button className="btn1" onClick={handleSendClick}>Whats App</button>
              <button className="btn2" onClick={handleSendClickGmail}>Gmail</button>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}


const Section = styled.section`

.btns{
  margin-top:1rem;
}
.date{
  margin-bottom:1rem
}
background-color:white;

// .btns{
//   display: flex;
//     justify-content: space-around;
// }
.title{
  margin-bottom:0.6rem;
}
.btn1{
 flex:1;
 margin-right:5px;
 padding-left: 3.5rem;
 padding-right: 3.5rem;
 padding-top:1rem;
 padding-bottom:1rem;

 cursor: pointer;
 border-radius: 0.3rem;
 border: none;
 color: white;
 background-color: rgb(31, 207, 31);;
 font-size: 1.1rem;
 transition: 0.3s ease-in-out;
 &:hover {
   background-color: #023e8a;}
}
.formContainer{
  margin-top:6rem;
}
.search > * {
  display: block;
}
.btn2{
  flex:1;
 margin-left:5px;
 padding-left: 3.5rem;
 padding-right: 3.5rem;
 padding-top:1rem;
 padding-bottom:1rem;

 cursor: pointer;
 border-radius: 0.3rem;
 border: none;
 color: white;
 background-color: #4361ee;
 font-size: 1.1rem;
 transition: 0.3s ease-in-out;
 &:hover {
   background-color: #023e8a;}

}
  position: relative;
  width: 100%;
  .navW{
    position: absolute;
    top: 10px;
    width:100%;
    margin-bottom:3rem;

  }
  height: 100%;

  .background {
    height: 100%;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;

    img {
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
      width: 100%;
      height:90vh;
      filter: brightness(60%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    .search {
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #03045e;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }

          &::placeholder {
            color: rgb(61, 54, 54);;
          }
          &:focus {
            outline: none;
          }
        }
      }

      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    .background{
      height:10vh;
    }
    .backImg{
      height:10vh;
    }
    height: 25rem;
   margin-bottom:10vh;
    .background {
      background-color: palegreen;
      img {
        height: 100%;
        height:90vh;
      }
    }
    
    .content {
      .title {
        margin-top:7rem;
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        /* padding: 0; */
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        .background {
          height: 80%;
          img {
            width: 100%;
            height:60vh;
            filter: brightness(60%);
          }
        }
        button {
          padding: 1rem;
          font-size: 0.8rem;
        }
        /* display: none; */
      }
    }
  }
  @media only screen and (max-width: 767px) {
    .background {
      img {
        width: 100%;
        height:70vh;
        filter: brightness(60%);
      }
    }}

`;