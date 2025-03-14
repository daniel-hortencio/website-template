"use client";

import { useEffect, useState } from "react";

export const useWindow = () => {
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    setLoading(false);

    // Limpeza do listener quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window]);

  return {
    loading,
    width,
  };
};
