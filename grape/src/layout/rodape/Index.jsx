import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../public/favicon.png";
import pix from "@/assets/images/pix.webp";
import visa from "@/assets/images/visa.png";
import mastercard from "@/assets/images/mastercard.png";

import {
  faInstagram,
  faTwitch,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export function Rodape() {
  return (
    <footer className="footer">
      <div className="footer__section footer__brand">
        <img
          src={logo} // troque pelo caminho real da logo
          alt="Logo Grape"
          className="footer__logo"
        />
      </div>

      <div className="footer__section">
        <h3 className="footer__title">Sobre nós</h3>
        <ul className="footer__list">
          <li>Carreiras</li>
          <li>Quer colaborar?</li>
          <li>Fornecedores</li>
          <li>Responsabilidade social</li>
          <li>Política de Privacidade</li>
          <li>Termos de Serviço</li>
          <li>Promoções</li>
        </ul>
      </div>

      <div className="footer__section">
        <h3 className="footer__title">Atendimento</h3>
        <ul className="footer__list">
          <li>Ajuda</li>
          <li>Envio</li>
          <li>Rastreio</li>
          <li>Trocas</li>
          <li>FAQ</li>
          <li>Fale conosco</li>
        </ul>
      </div>

      <div className="footer__section footer__socials">
        <h3 className="footer__title">Nossas Redes</h3>
        <div className="footer__icons">
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://www.instagram.com/grapecamps/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </a>
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://www.instagram.com/grapecamps/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitch} size="xl" />
          </a>
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://www.instagram.com/grapecamps/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} size="xl" />
          </a>
        </div>

        <h3 className="footer__title">Pagamentos</h3>
        <div className="footer__payments">
          <img src={pix} alt="PIX" />
          <img src={mastercard} alt="MasterCard" />
          <img src={visa} alt="Visa" />
        </div>

        <div className="footer__language">
          <select>
            <option value="brl">🇧🇷 BRL</option>
          </select>
        </div>
      </div>
    </footer>
  );
}
