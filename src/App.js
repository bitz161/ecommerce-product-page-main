import { AppContainer, MainContainer } from "./App.styles.jsx";
import HeaderPage from "./components/header/header.component";
import MainContent from "./components/mainContent/main-content.component.jsx";
import ModalComponent from "./components/modal/modal.component.jsx";
import { useContext } from "react";
import { PhotosContext } from "./context/photos.context.jsx";

function App() {
  const { enableModal } = useContext(PhotosContext);
  return (
    <AppContainer>
      <MainContainer>
        <HeaderPage />

        <MainContent />
      </MainContainer>
      {enableModal && <ModalComponent />}
    </AppContainer>
  );
}

export default App;

//  Sneaker Company

//   Fall Limited Edition Sneakers

//   These low-profile sneakers are your perfect casual wear companion. Featuring a
//   durable rubber outer sole, they’ll withstand everything the weather can offer.

//   $125.00
//   50%
//   $250.00

//   0
//   Add to cart
