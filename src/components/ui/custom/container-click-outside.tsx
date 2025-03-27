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
  ref,
  ...rest
}: ClickOutsideProps) => {
  const container = ref ? ref : React.useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: any) => {
    if (!!container?.current && !container.current.contains(event.target)) {
      onClickOutsite();
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [container]);

  return <div ref={container} {...rest} />;
};
