import React from "react";
import styled from "styled-components";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



export default function Footer() {
  const { t, i18n } = useTranslation();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: '#d0d8ff',
    boxShadow: 24,
    borderRadius: '25px',

    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <FooterContainer>

      <span>Copyright &copy; 2023 JadUmZug. All rights reserved</span>
      <ul className="links">
        <li>
          <div>
            <a href="#hero" onClick={handleOpen}>     {t("privacy")}
            </a>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {t("accept")}

                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {t("accept-policy")}
                </Typography>
              </Box>
            </Modal>
          </div>        </li>
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