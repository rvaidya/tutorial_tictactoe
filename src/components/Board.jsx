import React from 'react';
import Square from "./Square";
import calculateWinner from "../helpers/calculateWinner";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            next: 'X',
            squares: Array(9).fill(null)
        };
    }
    handleClick(i) {

        if (calculateWinner(this.state.squares) || this.state.squares[i])
            return;

        const squares = this.state.squares.slice();
        squares[i] = this.state.next;
        this.setState({ squares: squares, next: this.state.next === 'X' ? 'O' : 'X' });
    }
    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
    }

    render() {
        let status;
        const winner = calculateWinner(this.state.squares);

        if (winner)
            status = "Winner: " + winner;
        else
            status = 'Next player: ' + this.state.next;

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                </div>
                <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                </div>
                <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;
