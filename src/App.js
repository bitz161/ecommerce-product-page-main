import { AppContainer, MainContainer } from "./App.styles.jsx";
import HeaderPage from "./components/header/header.component";
import MainContent from "./components/mainContent/main-content.component.jsx";

function App() {
  // const { screenSize } = useContext(ScreenContext);
  return (
    <AppContainer>
      <MainContainer>
        <HeaderPage />
        <MainContent />
      </MainContainer>
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
