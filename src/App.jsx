import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar2";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/whats_app_button";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
import About from "./components/About";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers';
import CookieConsent from "react-cookie-consent";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

import { useTranslation, withTranslation, Trans } from 'react-i18next';


export default function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'cookieyes';
    script.type = 'text/javascript';
    script.src = 'https://cdn-cookieyes.com/client_data/0bb6b194edc41fda9e9c6005/script.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 1000,
      reset: false,

    });
    sr.reveal(
      `

        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        #aboutus
        `,
      {
        opacity: 0.5,
        interval: 200,
      }
    );
  }, []);
  const { t, i18n } = useTranslation();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="maindiv">
        <CookieConsent
          location="bottom"
          buttonText={t('accept')}
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          {t('accept-policy')}
        </CookieConsent>
        <ScrollToTop />
        <FloatingWhatsApp accountName="JadUmgZugs" phoneNumber="+963986417169" avatar="http://127.0.0.1:5500/src/mainlogo.png" />
        <Hero />
        <Services />
        <About />
        <Recommend />
        <Testimonials />
        <Footer />
      </div>
    </LocalizationProvider>

  );
}
