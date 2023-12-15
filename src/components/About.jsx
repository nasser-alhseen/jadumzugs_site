import React from "react";
import styled from "styled-components";
import { useTranslation, withTranslation, Trans } from 'react-i18next';


export default function About() {
    const { t, i18n } = useTranslation();



    return (
        <Section id="aboutus">
            <div className="title">
                <h2>{t("about")}</h2>
              <div className="pDiv">
              <p clas>
                {t("about_us")}
                </p>
              </div>
            </div>

        </Section>
    );
}

const Section = styled.section`
margin-bottom:1rem;
margin-top:2rem;
display:flex;

align-item:center;
align-content:center;
justify-content:center ;
justify-items:center ;

.title h2{
    text-align:center;
    font-weight: 400;
    font-size:2rem;
    
}
.pDiv{
    background-color:#2656c7 ;
    margin-top:0.5rem;


   width:50rem;
    padding:1rem;
    border-radius: 1rem;
    

}
p{
    color:white;
}
/* Mobile phones media query */
@media only screen and (max-width: 767px) {
    .pDiv{
        background-color:#2656c7 ;
    
       width:20rem;
        padding:1rem;
        border-radius: 1rem;
        
    
    }}

`;