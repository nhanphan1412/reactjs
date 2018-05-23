import React, { Component } from 'react';

class ColorPicker extends Component {

    constructor(props){
        super(props);
        this.state = {
            colors: ['red', 'green', 'cornflowerblue', 'gray']
        }
    }

    showColor(color){
        return{
            backgroundColor: color
        }
    }

    setActiveColor(color){
        this.props.onReceiveColor(color);
    }

    render() {

        var elmColor = this.state.colors.map((color, index) =>{
            return <span 
                        key={index} 
                        style={ this.showColor(color) }
                        className={this.props.color === color ? 'active' : ''}
                        onClick = { () => this.setActiveColor(color)}
                    >
                    </span>
        });

        return (
                <div className="col-lg-6">
                    <div className="card bg-dark">
                        <div className="card-header text-white">
                            Color Picker
                        </div>
                        <div className="card-body">
                            { elmColor }
                        </div>
                    </div>
                </div>
            );
    }
}

export default ColorPicker;