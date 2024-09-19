import { Col, Row } from "react-bootstrap";
import IconButton from "./components/IconButton";
import ProfileHeader from "./components/ProfileHeader";
import { ProfileContext } from "./contexts/ProfileContext";
import { PROFILE_DATA } from "./data";
import ImageGrid from "./components/ImageGrid";
import { useState } from "react";
import AddPostModal from "./components/AddPostModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
  const openModal = () => {
    setShowModal(true);
  };

  return (
    <ProfileContext.Provider value={PROFILE_DATA}>
      <Row>
        <Col
          sm={1}
          className="d-flex flex-column justify-content-start align-items-center vh-100 bg-light"
          style={{ position: "sticky", top: 0 }}
        >
          <IconButton iconClassName="bi bi-instagram" isTop={true}></IconButton>
          <IconButton iconClassName="bi bi-house"></IconButton>
          <IconButton iconClassName="bi bi-search"></IconButton>
          <IconButton iconClassName="bi bi-compass"></IconButton>
          <IconButton iconClassName="bi bi-film"></IconButton>
          <IconButton iconClassName="bi bi-chat"></IconButton>
          <IconButton iconClassName="bi bi-heart"></IconButton>
          <IconButton
            iconClassName="bi bi-plus-square"
            onClick={openModal}
          ></IconButton>
          <IconButton iconClassName="bi bi-person-circle"></IconButton>
          <IconButton iconClassName="bi bi-list" isBottom={true}></IconButton>
        </Col>
        <Col sm={11}>
          <ProfileHeader></ProfileHeader>
          <ImageGrid></ImageGrid>
          <AddPostModal
            show={showModal}
            handleClose={closeModal}
          ></AddPostModal>
        </Col>
      </Row>
    </ProfileContext.Provider>
  );
}

export default App;
