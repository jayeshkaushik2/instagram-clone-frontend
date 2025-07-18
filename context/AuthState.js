import AuthContext from "./AuthContext";
import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CreateApiCtx from "./CreateApiCtx";

//local imports

const AuthState = ({ children }) => {
  const [AuthTokenVar, setAuthTokenVar] = React.useState("");
  const [User, setUser] = useState(() =>
    AuthTokenVar ? jwt_decode(JSON.parse(AuthTokenVar).access) : null
  );
  const [AuthToken, setAuthToken] = useState(() =>
    AuthTokenVar ? JSON.parse(AuthTokenVar) : null
  );
  const [UserLogin, setUserLogin] = useState(AuthTokenVar ? "Logout" : "Login");

  const AsyncStorageFunction = async (type, key, value) => {
    try {
      if (type === "get") {
        const val = await AsyncStorage.getItem(key);
        setAuthTokenVar(val);
      } else if (type === "set") {
        await AsyncStorage.setItem(key, value);
      } else if (type === "remove") {
        await AsyncStorage.removeItem(key);
      }
    } catch (error) {
      return null;
    }
  };

  let loginUser = async (user_info) => {
    // let resp = await fetch(`${ECOM_API_URL}/token/`, {
    //   method: "post",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(user_info),
    // });
    try {
      let response = CreateApiCtx(
        "login",
        "POST",
        (data = JSON.stringify(user_info))
      );

      let data = await response.json();
      console.log("login data", data);
      //   if (response.status === 200) {
      // setAuthToken(data);
      // setUser(jwt_decode(data.access));
      // setUserLogin("Logout");
      // AsyncStorageFunction("set", "AuthToken", JSON.stringify(data));
      //   } else {
      // alert("unable to login");
      //   }
    } catch (err) {
      console.log("login error", err);
    }
  };

  let RefreshUserAccess = async () => {
    // TODO have to write the refresh logics
    // let response = await fetch(`${ECOM_API_URL}/token/refresh/`, {
    //   method: "post",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify({ refresh: AuthToken.refresh }),
    // });
    // let response = CreateApiCtx(
    //   "login",
    //   "POST",
    //   (data = JSON.stringify({ refresh: AuthToken.refresh }))
    // );
    // let data = await response.json();
    // if (response.status === 200) {
    //   setAuthToken(data);
    //   setUser(jwt_decode(data.access));
    //   AsyncStorageFunction("set", "AuthToken", JSON.stringify(data));
    // } else {
    //   logoutUser();
    // }
  };

  const logoutUser = () => {
    setAuthToken(null);
    setUser(null);
    setUserLogin("Login");
    AsyncStorageFunction("remove", "AuthToken", "");
  };

  let userData = {
    user: User,
    AuthToken: AuthToken,
    login: UserLogin,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (AuthToken) {
        RefreshUserAccess();
        AsyncStorageFunction("get", "AuthToken", "");
      }
    }, 4 * 60 * 1000);
    return () => {
      clearInterval(interval);
    };
  }, [AuthToken]);

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthState;
