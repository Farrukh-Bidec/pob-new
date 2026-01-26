"use client";
import { useState, useEffect } from "react";
import WebLoader from "./WebLoader";

export default function LoaderWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <WebLoader /> : <>{children}</>;
}
