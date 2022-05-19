import { Component } from 'react';
declare class ReactSwitch extends Component {
  constructor(props: any);
  componentDidUpdate(prevProps: any): void;
  $onDragStart(clientX: any): void;
  $onDrag(clientX: any): void;
  $onDragStop(event: any): void;
  $onMouseDown(event: any): void;
  $onMouseMove(event: any): void;
  $onMouseUp(event: any): void;
  $onTouchStart(event: any): void;
  $onTouchMove(event: any): void;
  $onTouchEnd(event: any): void;
  $onInputChange(event: any): void;
  $onKeyUp(): void;
  $setHasOutline(): void;
  $unsetHasOutline(): void;
  $getInputRef(el: any): void;
  $onClick(event: any): void;
  $onChange(event: any): void;
  render(): JSX.Element;
}
export default ReactSwitch;
