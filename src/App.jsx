import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar2";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
import About from "./components/About";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers';
import CookieConsent from "react-cookie-consent";

import { useTranslation, withTranslation, Trans } from 'react-i18next';


export default function App() {
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
        <Hero />
        <Services />
        <Recommend />
        <Testimonials />
        <About />
        <Footer />
      </div>
    </LocalizationProvider>

  );
}
