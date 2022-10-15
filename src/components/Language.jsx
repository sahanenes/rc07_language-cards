import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({ name, img, options }) => {
  const [showDesc, setShowDesc] = useState(false);
  return (
    <Container
      className="p-4 rounded-2 h-100 lang-card"
      style={{ background: "peachpuff" }}
      onClick={() => setShowDesc(!showDesc)}
    >
      {!showDesc ? (
        <Container>
          <Image className="lang-logo" src={img} width="70%"></Image>
          <h3>{name}</h3>
        </Container>
      ) : (
        <ul className="h-100 d-flex flex-column justify-content-center">
          {options.map((item) => {
            return <li className="text-start h5 ">{item}</li>;
          })}
        </ul>
      )}
    </Container>
  );
};

export default Language;
