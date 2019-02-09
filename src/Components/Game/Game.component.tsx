import React, {Component} from "react";
import Board, {BoardType} from "../Board";
import {FlatList, Text} from 'react-native';

import styled, {createGlobalStyle} from "styled-components/native";

const GameContainer = styled.View`
  padding: 20px;
  background-color: white;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
`;
const StatusContainer = styled.View`
  margin: 0 10px 10px;
`;
const StatusText = styled.Text``;
const Moves = styled.FlatList``;
const MovesText = styled.Text`
    padding: 10px;
    font-size: 18;
    height: 44;
`;
const GameBoard = styled.View``;
const GameInfo = styled.View`
width: 115px;
`;
const MovesButtonContainer = styled.TouchableOpacity`
  border: 1px solid #999;
  margin-left: 10px;
  margin-top: 20px;
  background-color: coral;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;
const MovesButtonText = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;
type MyProps = {};
type MyState = {
    history: BoardType[];
    xIsNext: boolean;
    stepNumber: number;
};
export default class Game extends React.Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            stepNumber: 0,
            xIsNext: true
        };
    }

    jumpTo(step: number) {
        this.setState({
            stepNumber: step,
            xIsNext: step % 2 === 0
        });
    }

    handleClick(i: number) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([
                {
                    squares: squares
                }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    calculateWinner(squares: string[]) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]
            ) {
                return squares[a];
            }
        }
        return null;
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = this.calculateWinner(current.squares);

        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }
        return (
            <GameContainer>
                <GameBoard>
                    <Board
                        squares={current.squares}
                        onClick={(i: number) => this.handleClick(i)}
                    />
                </GameBoard>
                <GameInfo>
                    <StatusContainer>
                        <StatusText>
                            {status}
                        </StatusText>
                    </StatusContainer>
                    <Moves
                        data={history}
                        renderItem={(item: BoardType) => {
                            console.log(item);
                            const desc = item.index ? "#" + item.index : "start";
                            return (
                                <MovesButtonContainer key={item.index} onPress={() => this.jumpTo(item.index)}>
                                    <MovesButtonText>{desc}</MovesButtonText>
                                </MovesButtonContainer>
                            );
                        }}
                    />
                </GameInfo>
            </GameContainer>
        );
    }
}
