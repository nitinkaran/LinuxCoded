import React, {Component} from 'react';
import Square from '../Square/Square';
import './BoardCss.css';

class Board extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            square: Array(9).fill(null),
            nextPlayer: true,
            count: 9
        };

        this.handleClick = this.handleClick.bind(this);
        this.resetBoard = this.resetBoard.bind(this);
        this.findWinner = this.findWinner.bind(this);
    }

    findWinner = (squares) => {
        let moves = [
            [0, 1, 2],
            [0, 3, 6],
            [0, 4, 8],
            [3, 4, 5],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [6, 7, 8]
        ];

        for(var i=0; i<8; i++) {
            let [a, b, c] = moves[i];
            if (squares[a] && squares[a] === squares[b] &&  squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    handleClick(value) {
        const squareDetails = this.state.square.slice();
        if (squareDetails[value] !== null || this.findWinner(squareDetails)) {
            return;
        }
        const currentCount = this.state.count - 1;
        squareDetails[value] = this.state.nextPlayer ? 'X' : 'O';
        this.setState({
            square: squareDetails,
            nextPlayer: !this.state.nextPlayer,
            count: currentCount
        });
    }
    
    resetBoard = () => {
        this.setState ({
            square: Array(9).fill(null),
            nextPlayer: true,
            count: 9
        });
    };

    renderSquare = (value) => {
        return (
            <Square 
                value={this.state.square[value]} 
                handleClick={() => {this.handleClick(value)}} 
            />
        );
    };

    displayBoard = () => {
        let status;
        let winner = this.findWinner(this.state.square);
        if (winner) {
            status = 'Congratulation winner is : ' + winner;
        } else if (winner === null && this.state.count !== 0) {
            status = this.state.nextPlayer ? 'The Next Player is : X' : 'The Next Player is : O';
        } else {
            status = 'OOPS !! Match Draw';
        }

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
                {
                    (winner !== null || this.state.count === 0) &&
                    <button 
                        className="button"
                        onClick = {() => {this.resetBoard()}}
                    >
                        PLAY AGAIN
                    </button>
                }
            </div>
        );
    };

    render = () => {
        return (
            <div className="game">
                <div className="game-board">
                    {this.displayBoard()}
                </div>
            </div>
        );
    };

}

export default Board;
