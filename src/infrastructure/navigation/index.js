import React, { useContext } from "react";
import AppNavigation from "./app.navigation";
import AccountNavigation from "./account.navigation";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export function Navigation() {
  const { isAuthenticated } = useContext(AuthenticationContext);
  console.log("isAuthenticated: " + isAuthenticated);
  return (
    // <NavigationContainer>
    isAuthenticated ? <AppNavigation /> : <AccountNavigation />
    // </NavigationContainer>
  );
}
