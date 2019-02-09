import React, { Component } from "react";
import Square from "../Square";
import styled from 'styled-components/native'
const BoardContainer = styled.View`
  flex-direction: row;
`;

const BoardRow = styled.View``;
type MyProps = {
  squares: string[];
  onClick: (i: number) => void;
};
export type BoardType = {
  squares: string[];
};
export default class Board extends React.Component<MyProps> {
  renderSquare(i: number) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  render() {
    return (
      <BoardContainer>
        <BoardRow>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </BoardRow>
        <BoardRow>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </BoardRow>
        <BoardRow>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </BoardRow>
      </BoardContainer>
    );
  }
}
