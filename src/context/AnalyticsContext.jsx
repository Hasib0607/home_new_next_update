"use client";

import { createContext, useState } from "react";

export const AnalyticsContext = createContext();

export const AnalyticsProvider = ({ children }) => {
  const [clickEvents, setClickEvents] = useState({});

  return (
    <AnalyticsContext.Provider value={{ clickEvents, setClickEvents }}>
      {children}
    </AnalyticsContext.Provider>
  );
};
