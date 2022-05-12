import React from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { Constants } from "expo-constants";
import { USER_TOKEN_KEY } from "../providers/AuthProvider";


const axiosInstance = axios.create({
    baseURL: Constants.manifest.extra.api_url + "/",
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
    }
});

//configura axios para cada peticion utilice el token del usuario guardado en storage
axiosInstance.interceptors.request.use(async req => {
    const access_token = await SecureStore.getItemAsync(USER_TOKEN_KEY);
  req.headers["Authorization"] = `Bearer ${access_token}`;
  return req;
});

export default axiosInstance;