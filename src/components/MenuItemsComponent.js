import React from "react";
import { ScrollView } from "react-native";
import { menuItems } from "./dummy";
import {
  MenuItem,
  GradientContainer,
  MenuIcon,
  MenuTextContainer,
  MenuTitle,
  MenuDescription,
} from "./styles";

const MenuItemsComponent = () => {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
      {menuItems.map((item, index) => (
        <MenuItem key={index}>
          <GradientContainer colors={item.gradient}>
            <MenuTextContainer>
              <MenuTitle>{item.title}</MenuTitle>
              <MenuDescription>{item.description}</MenuDescription>
            </MenuTextContainer>
            <MenuIcon source={item.icon} />
          </GradientContainer>
        </MenuItem>
      ))}
    </ScrollView>
  );
};

export default MenuItemsComponent;
