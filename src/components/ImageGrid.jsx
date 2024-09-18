import React, { useContext } from "react";
import { ProfileContext } from "../contexts/ProfileContext";
import { Col, Row, Image } from "react-bootstrap";

function ImageGrid() {
  const images = useContext(ProfileContext).posts.map((post) => post.image);
  console.log(images);

  const renderImages = () => {
    return images.map((imageURl, index) => (
      <Col md={4} key={index} className="mb-4">
        <Image src={imageURl} fluid></Image>
      </Col>
    ));
  };
  return <Row>{renderImages()}</Row>;
}

export default ImageGrid;
