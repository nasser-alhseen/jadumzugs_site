import React, { useState,useEffect } from "react";
import styled from "styled-components";

import { useTranslation, withTranslation, Trans } from 'react-i18next';



export default function Recommend() {
  const { t, i18n } = useTranslation();


  const [images,setImages]=useState([])
  const fetchServices = async () => {
    try {
      const response = await fetch('https://jad-umzug.onrender.com/image/all');
      const data = await response.json();
      setImages(data['data']);
    } catch (error) {
      console.error(error);
    }
  };

  // call the fetchServices function when the component mounts
  useEffect(() => {
    fetchServices();
  }, []);
  

  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <div className="title">
        <h2>{t("gallery")}</h2>

      </div>
      {/* <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div> */}
      <div className="destinations">
        {images.map((image) => {
          return (
            <div className="destination">
              <img src={image.path.replace("localhost:3001", "jad-umzug.onrender.com")} alt="" />
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
.title h2{
  margin-bottom:30px
}
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destination img{
    border-radius: 20px;

  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin:1rem;
    padding: 0 3rem;
    .destination {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #ffffff;
      border-radius: 20px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #ffffff;
            width: 2rem;
            /* padding: 1rem; */
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;