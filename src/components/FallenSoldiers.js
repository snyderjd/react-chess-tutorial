import React, { Component } from 'react';
import Square from './Square';
import '../index.css';

class FallenSoldiers extends Component {

    renderSquare(square, i, squareShade) {
        return (
            <Square
                piece={square}
                style={square.style}
            />  
        ) 
    }

    render() {
        console.log("FallenSoldiers", this.props)
        return (
            <div>
                <div className="board-row">
                    {this.props.whiteFallenSoldiers.map((ws, index) =>
                        this.renderSquare(ws, index)
                    )}
                </div>
                <div className="board-row">
                    {this.props.blackFallenSoldiers.map((bs, index) =>
                        this.renderSquare(bs, index)    
                    )}
                </div>
            </div>
        );
    }
}

export default FallenSoldiers;
