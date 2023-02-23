import Menu from "./components/menu/Menu";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import styled from "styled-components";

const APPContainer = styled.div`
min-width : 1200px;
`;

const App = () => {
  return (
    <APPContainer className="App">
      <Header />
      <Menu />
      <Footer />
    </APPContainer>
  );
}

export default App;