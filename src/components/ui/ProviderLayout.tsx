"use client"

import { persistor, store } from "@/redux/store";
// // import { SessionProvider } from "next-auth/react";
// import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const ProviderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
    </PersistGate>
 
    </Provider>
  );
};

export default ProviderLayout;