import React from "react";
import {
  StatusBar,
} from "react-native";
import { Images } from "./src/assets/img/index";
import {
  Container,
  BackgroundImage,
  HeaderTitle,
  Header,
  ProfileIcon,
} from "./src/components/styles";
import MenuItemsComponent from "./src/components/MenuItemsComponent";
const App = () => {
  return (
    <Container>
      <StatusBar backgroundColor="black" />
      <BackgroundImage source={Images.bg}>
        <Header>
          <HeaderTitle source={Images.text} resizeMode="contain" />
          <ProfileIcon source={Images.logo} />
        </Header>
        <MenuItemsComponent />
      </BackgroundImage>
    </Container>
  );
};
export default App;
