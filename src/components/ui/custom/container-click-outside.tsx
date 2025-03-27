"use client";

import React, { useEffect } from "react";

export type ClickOutsideProps = {
  element?: keyof HTMLElementTagNameMap;
  onClickOutsite: () => void;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const ContainerClickOutside = ({
  element,
  onClickOutsite,
  ...rest
}: ClickOutsideProps) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClickOutsite();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    document.addEventListener("touchstart", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener("touchstart", handleClickOutside, true);
    };
  }, []);

  return <div ref={ref} {...rest} />;
};
