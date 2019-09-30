import React, { Component } from 'react';
import Square from './Square';
import '../index.css';


class Board extends Component {

    isEven = (num) => {
        return num % 2 === 0;
    }
    
    renderSquare(i, squareShade) {
        return <Square 
            piece={this.props.squares[i]}
            style={this.props.squares[i] ? this.props.squares[i].style : null}
            shade={squareShade}
            onClick={() => this.props.onClick(i)}
        />
    }

    render() {
        const board = [];
        for (let i = 0; i < 8; i++) {
            const squareRows = [];
            for (let j = 0; j < 8; j++) {
                const squareShade = (this.isEven(i) && this.isEven(j)) || (!this.isEven(i) && !this.isEven(j)) ? "light-square" : "dark-square";
                squareRows.push(this.renderSquare((i * 8) + j, squareShade));
            }
            board.push(<div className="board-row">{squareRows}</div>)
        }

        return (
            <div>
                {board}
            </div>
        );
    }
}

export default Board;