import React from "react";
import styled from "styled-components";

import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import { useState, useEffect } from "react";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import delivery from '../assets/delivery.png';
import truck from '../assets/delivery-truck.png'
import movingTruck from '../assets/moving-truck.png'
import packages from '../assets/packages.png'
var ls = require('local-storage');

const icons = [
  <LocalShippingOutlinedIcon style={{ fontSize: '3rem', color: ' #2656c7' }} />,
  <Inventory2OutlinedIcon style={{ fontSize: '3rem', color: ' #2656c7' }} />,

  <HandymanOutlinedIcon style={{ fontSize: '3rem', color: ' #2656c7' }} />,

  <CleaningServicesOutlinedIcon style={{ fontSize: '3rem', color: ' #2656c7' }} />,


];
export default function Services() {
  const servicesList = [
    {
      icon: packages,
      title: "Ein- & Auspackservice ",
      subtitle: `
      Wir übernehmen das Ein- und
      Auspacken für Sie. Mit dem
      richtigen Verpackungsmaterial und
      professionellem Team können Sie
      sich auf wichtigere Themen
      fokussieren.`
    },
    {
      icon: delivery,
      title: "Transport",
      subtitle: `
Mit unseren Transportern, können
Sie kleine sowie große Möbelstücke
und Wertsachen transportieren.
Flexibel, sicher und professionell. `
    },
    {
      icon: truck,
      title: "Privatumzu",
      subtitle: `

      Egal ob Wohnung oder Haus wir
      bringen Ihre wertvollen Sachen gut
      und sicher in Ihr neues zuhause.
      Mit uns ist Ihr Umzug stressfrei und
      reibungslos`
    },
    {
      icon: movingTruck,
      title: "Gewerbeumzu",
      subtitle: `
      Wir kümmern uns beim
      Geschäftsumzug von A-Z. Wir
      sorgen dafür, dass der Umzug
      zuverlässig durchläuft und Ihr
      Betrieb nicht beeinträchtigt wird`
    },
  ];
  // const { t, i18n } = useTranslation();

  // const [services, setServices] = useState([]);

  // const fetchServices = async () => {
  //   try {
  //     const response = await fetch('https://jad-umzug.onrender.com/services/all', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ lang: ls.get('lang') }),
  //     });
  //     const data = await response.json();
  //     setServices(data['data']);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchServices();
  // }, []);


  return (
    <div>
      <div className="titleDiv">

      </div>
      <Section id="services">

        {(servicesList).map((service, index) => {
          return (
            <div className="service" key={index}>
              <div className="icon">
                <img src={service.icon} alt="" />
              </div>
              <h3>{service.title}</h3>

              <p>{service.subtitle}</p>
            </div>
          );
        })}
      </Section>
    </div>


  );
}

const Section = styled.section`
margin-top:4 rem;
.title h2{
  margin-bottom:30px
}
.titleDiv h2{
  text-align:center;
}
  .title {
    text-align: center;
  }
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  p{
    color:black;
  }
  gap: 1rem;
  .service {
    border:2px solid  #2656c7;
    display: flex;
    border-radius:8px;
    margin-left:1rem;
    margin-right:1rem;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 4rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {

    margin-top:8rem;

    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {

    margin-top:8rem;

    grid-template-columns: repeat(2, 1fr);
  }
`;