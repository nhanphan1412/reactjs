import React, { Component } from 'react';

class ColorPicker extends Component {

    constructor(props){
        super(props);
        this.state = {
            colors: ['red', 'green', 'cornflowerblue', 'gray']
        }

        this.state.active_color = this.props.color;
    }

    showColor(color){
        return{
            backgroundColor: color
        }
    }

    // setActiveColor(color){
    //     this.props.onReceiveColor(color);
    // }

    render() {

        var elmColor = this.state.colors.map((color, index) =>{
            return <span 
                        key={index} 
                        style={ this.showColor(color) }
                        className={this.state.active_color === color ? 'active' : ''}
                        onClick = { () => {
                            this.setState({active_color: color});
                            this.props.onChangeColor && this.props.onChangeColor(color);
                        }}
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