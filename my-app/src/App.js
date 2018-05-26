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
            fontSize: 14
        };
        this.onSetColor = this.onSetColor.bind(this);
        this.onReceiveFontSize = this.onReceiveFontSize.bind(this);
        this.onSettingDefault = this.onSettingDefault.bind(this);
    }

    onSetColor = (params) => {
        this.setState({
            color: params
        });
    }

    onReceiveFontSize(value){
        if(this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36){
            this.setState({
                fontSize : this.state.fontSize + value
            });
        }
    }

    onSettingDefault(value){
        if(value){
            this.setState({
                color: 'red',
                fontSize: 14
            });
        }
    }

  render() {
    return (
        <div className="container">
            <div className="row">
                <ColorPicker 
                    color={this.state.color} 
                    onReceiveColor={this.onSetColor} 
                />
                <div className="col-lg-6">
                    <SizeSetting 
                        fontSize={this.state.fontSize} 
                        onReceiveFontSize={this.onReceiveFontSize} 
                    />
                    <Reset 
                        onSettingDefault={this.onSettingDefault} 
                    />
                </div>
            </div>
            <div className="row">
                <Result 
                    color={this.state.color} 
                    fontSize={this.state.fontSize} 
                />
            </div>
        </div>
    );
  }
}

export default App;