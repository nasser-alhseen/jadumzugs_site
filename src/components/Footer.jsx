import React from "react";
import styled from "styled-components";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { useTranslation, withTranslation, Trans } from 'react-i18next';

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <FooterContainer>
      <span>Copyright &copy; 2023 JadUmZug. All rights reserved</span>
      <ul className="links">
        <li>
          <a href="#hero">{t("home")}</a>
        </li>
        <li>
          <a href="#services">{t("services")}</a>
        </li>
        <li>ٍ
          <a href="#recommend">{t("gallery")}</a>
        </li>
        <li>
          <a href="#testimonials">{t("testimonials")}</a>
        </li>
        <li>
          <a href="">Arthur-Hoffmann-Straße 99
            Leipzig 04275C</a>
        </li>
        <li>
          <a href="https://wa.me/+4915750962657">+4915750962657</a>
        </li>

      </ul>
      <ul className="social__links">

        <li>
          <a href="https://www.facebook.com/profile.php?id=61551560332714&mibextid=MKOS29">      <BsFacebook className="face" /> </a>
        </li>
        <li>
          <a href="https://instagram.com/jadumzugs?igshid=ZGUzMzM3NWJiOQ==">    <BsInstagram className="insta" /></a>
        </li>

      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #d0d8ff;
  border-radius: 0.5rem;
  padding: 2.5rem;

  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .social__links {
      flex-direction: row;
    }
  }
`;