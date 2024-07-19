import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
export const Container = styled.View`
  flex: 1;
  background-color: #000;
`;

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
`;

export const HeaderTitle = styled.Image`
  width: 100px;
  height: 50px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const ProfileIcon = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const MenuItem = styled.View`
  margin: 5px 5px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const GradientContainer = styled(LinearGradient)`
  flex-direction: row;
  align-items: center;
  padding: 15px;
  border-radius: 25px;
`;

export const MenuIcon = styled.Image`
  width: 70px;
  height: 70px;
  margin-right: 15px;
`;

export const MenuTextContainer = styled.View`
  flex: 1;
`;

export const MenuTitle = styled.Text`
  font-size: 20px;
  color: #ffffff;
  font-family: SFProDisplay-Regular;
`;

export const MenuDescription = styled.Text`
  font-size: 14px;
  color: #99989b;
  margin-top: 5px;
`;
