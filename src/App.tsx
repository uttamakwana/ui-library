import { FaDownload, FaTrash, FaUser } from "react-icons/fa";
import { Button, Container } from "./components/ui";
import { LoadingButton } from "./components/ui/button/loading-button/loading-button";
import { useState } from "react";

const App = () => {
  const [isUploading, setIsUploading] = useState(() => false);

  function handleUpload() {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
    }, 4000);
  }
  return (
    <Container padded center breakpoint="desktop">
      <Button variant="primary" action="primary" Icon={<FaUser />}>
        Sign Up
      </Button>
      <LoadingButton
        loading={isUploading}
        className="mt-1"
        onClick={handleUpload}
        Icon={<FaDownload />}
        variant="success"
        action="secondary"
      >
        {isUploading ? "downloading" : "save"}
      </LoadingButton>
      <LoadingButton
        loading={isUploading}
        className="mt-1"
        onClick={handleUpload}
        Icon={<FaTrash />}
        variant="danger"
      >
        {isUploading ? "downloading" : "delete"}
      </LoadingButton>
    </Container>
  );
};

export default App;
