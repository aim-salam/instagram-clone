import React, { useContext, useState } from "react";
import { Col, Row, Image, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import UpdatePostModal from "./UpdatePostModal";

function ImageGrid() {
  const posts = useSelector((state) => state.posts);

  const [show, setShow] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  const handleClose = () => {
    setCurrentPost(null);
    setShow(false);
  };

  const handleShow = (post) => {
    setCurrentPost(post);
    setShow(true);
  };

  const renderImages = () => {
    return posts.map((post, index) => (
      <Col md={4} key={post.id + index} className="mb-4">
        <Image src={post.image} fluid></Image>
        <Button
          onClick={() => {
            handleShow(post);
          }}
          variant="outline-primary"
        >
          <i className="bi bi-pencil-square"></i>
        </Button>
      </Col>
    ));
  };

  return (
    <>
      <Row>{renderImages()}</Row>
      {currentPost && (
        <UpdatePostModal
          show={show}
          handleClose={handleClose}
          postId={currentPost.id}
        ></UpdatePostModal>
      )}
    </>
  );
}

export default ImageGrid;
