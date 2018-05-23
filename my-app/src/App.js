import React, { Component } from 'react';
import './App.css';
import ColorPicker from "./components/ColorPicker"
import Result from "./components/Result"
import SizeSetting from "./components/SizeSetting"
import Reset from "./components/Reset"

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            color: 'red',
            fontSize: 15
        };
        this.onSetColor = this.onSetColor.bind(this);
    }

    onSetColor = (params) => {
        this.setState({
            color: params
        });
    }

  render() {
    return (
        <div className="container">
            <div className="row">
                <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
                <div className="col-lg-6">
                    <SizeSetting />
                    <Reset />
                </div>
            </div>
            <div className="row">
                <Result />
            </div>
        </div>
    );
  }
}

export default App;