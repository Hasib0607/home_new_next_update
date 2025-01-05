"use client";

import React, { useEffect, useState } from "react";

const ThemeProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div>{children}</div>;
  }
};

export default ThemeProvider;
