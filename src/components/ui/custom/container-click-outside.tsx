"use client";

import React from "react";

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

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref]);

  return <div ref={ref} {...rest} />;
};
