import { useEffect } from "react";

type Props = {
  element: HTMLDivElement | null;
  onSwipeToEnd: () => void;
  threshold?: number;
  direction: "right" | "left";
};

export const useSwipe = ({
  element,
  onSwipeToEnd,
  threshold = 80,
  direction,
}: Props) => {
  let startX = 0;
  let currentX = 0;
  let isDragging = false;
  const maxTranslateX = element?.offsetWidth ?? 0;

  function startDrag(event) {
    if (!element) return;

    startX = event.touches ? event.touches[0].clientX : event.clientX;
    isDragging = true;
    element.style.transition = "none";
  }

  function moveDragRight(event) {
    if (!isDragging || !element) return;

    currentX = event.touches ? event.touches[0].clientX : event.clientX;
    const deltaX = currentX - startX;

    if (deltaX > 0) {
      const limitedTranslateX = Math.min(deltaX, maxTranslateX);
      element.style.transform = `translateX(${limitedTranslateX}px)`;
    }
  }

  function endDragRight() {
    if (!isDragging || !element) return;

    const distance = currentX - startX;
    isDragging = false;

    element.style.transition = "";
    element.style.transform = "";

    if (distance > threshold) {
      onSwipeToEnd();
    }
  }

  function moveDragLeft(event) {
    if (!isDragging || !element) return;

    currentX = event.touches ? event.touches[0].clientX : event.clientX;
    const deltaX = currentX - startX;

    if (deltaX < 0) {
      const limitedTranslateX = Math.min(deltaX, maxTranslateX);

      element.style.transform = `translateX(${limitedTranslateX}px)`;
    }
  }

  function endDragLeft() {
    if (!isDragging || !element) return;

    const distance = currentX - startX;

    isDragging = false;

    element.style.transition = "";
    element.style.transform = "";

    if (distance < threshold * -1) {
      onSwipeToEnd();
    }
  }

  useEffect(() => {
    if (!element) return;

    const controller = new AbortController();
    const { signal } = controller;

    element.addEventListener("touchstart", startDrag, { signal });
    element.addEventListener(
      "touchmove",
      direction === "left" ? moveDragLeft : moveDragRight,
      { signal }
    );
    element.addEventListener(
      "touchend",
      direction === "left" ? endDragLeft : endDragRight,
      { signal }
    );

    element.addEventListener("mousedown", startDrag, { signal });
    document.addEventListener(
      "mousemove",
      direction === "left" ? moveDragLeft : moveDragRight,
      { signal }
    );
    document.addEventListener(
      "mouseup",
      direction === "left" ? endDragLeft : endDragRight,
      { signal }
    );

    return () => {
      controller.abort();
    };
  }, [element, direction]);
};
