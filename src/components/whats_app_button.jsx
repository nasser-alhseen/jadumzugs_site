import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/mainlogo.png";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    const [scrollState, setScrollState] = useState(false);
    const toTop = () => {
        window.scrollTo({ top: 0 });
    };
    window.addEventListener("scroll", () => {
        window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
    });
    return (
        <ToTop onClick={toTop} scrollState={scrollState}>
            <FaWhatsapp />?
        </ToTop>
    );
}

const ToTop = styled.div`
  display: ${({ scrollState }) => (scrollState ? "block" : "none")};
  position: fixed;
  cursor: pointer;
  z-index: 10;
  bottom: 1rem;
  right: 2rem;
  img {
    height: 2.5rem;
  }
  border-radius: 2rem;
  background-color: #2656c7;;
  padding: 1rem;
`;
