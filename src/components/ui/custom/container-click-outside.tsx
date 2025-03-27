"use client";

import React, { useRef } from "react";

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
  const innerRef = useRef<HTMLDivElement | null>(null);
  const containerRef = ref ?? innerRef;

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (!containerRef) return;

    if (
      !!containerRef?.current &&
      !containerRef.current.contains(event.target)
    ) {
      onClickOutsite();
    }
  };

  React.useEffect(() => {
    if (!containerRef) return;

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [containerRef]);

  return <div ref={containerRef} {...rest} />;
};
