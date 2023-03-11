import React from "react";
import "../style/component/footer.scss";

const Footer = () => {
  return (
    <div>
      {" "}
      <footer className="footer">
        <div className="footer-top">
          <p>Sayt haqida</p>
          <p>RSS</p>
          <p>Aloqa</p>
          <p>Reklama</p>
          <p>Kun mavzulari</p>
          <p>kun.uz jamoasi</p>
          <img
            className="logo"
            src="https://kun.uz/assets/cd6ab492/img/18plus-v2.svg"
            alt=""
          />
        </div>
        <div className="footer-bottom">
          <p>
            “KUN.UZ” saytida eʼlon qilingan materiallardan nusxa koʻchirish,
            tarqatish va boshqa shakllarda foydalanish faqat tahririyat yozma
            roziligi bilan amalga oshirilishi mumkin. <br /> Guvohnoma: №0987.
            Berilgan sanasi: 22.06.2015-yil. Muassis: “WEB EXPERT” MCHJ.
            Tahririyat manzili: 100043, Toshkent shahri, K. Yormatov koʻchasi,
            12-uy. Elektron manzil: info@kun.uz. <br /> Saytda eʼlon
            qilinayotgan mualliflik maqolalarida keltirilgan fikrlar muallifga
            tegishli va ular Kun.uz tahririyati nuqtai nazarini ifoda etmasligi
            mumkin. Ⓣ - maqola va materiallarda qo‘yilgan mazkur belgi ularning
            tijorat va reklama huquqlari asosida eʼlon qilinganligini bildiradi.
          </p>
          <div className="icons">
            <img
              src="https://kun.uz/assets/cd6ab492/img/social-youtube.svg"
              alt=""
              className="iconS"
            />
            <img
              src="https://kun.uz/assets/cd6ab492/img/social-telegram.svg"
              alt=""
              className="iconS"
            />
            <img
              src="https://kun.uz/assets/cd6ab492/img/social-facebook.svg"
              alt=""
              className="iconS"
            />
            <img
              src="https://kun.uz/assets/cd6ab492/img/social-twitter.svg"
              alt=""
              className="iconS"
            />
            <img
              src="https://kun.uz/assets/cd6ab492/img/social-instagram.svg"
              alt=""
              className="iconS"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
