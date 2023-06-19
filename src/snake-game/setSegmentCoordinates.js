export const setSegmentCoordinates = (segment, x, y) => {
  segment.xPosition = x;
  segment.yPosition = y;
  segment.element.style.bottom = segment.yPosition * 20 + 'px';
  segment.element.style.left = segment.xPosition * 20 + 'px';
};
