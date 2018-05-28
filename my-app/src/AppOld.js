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
            fontSize: 14,
            txtUserName : '',
            txtPassword : '',
            txtDesc : '',
            sltGender : 0,
            rdLang : 'vi'
        };
        this.onSetColor = this.onSetColor.bind(this);
        this.onReceiveFontSize = this.onReceiveFontSize.bind(this);
        this.onSettingDefault = this.onSettingDefault.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
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

    onHandleChange(event){
        console.log(event.target);
        var target = event.target;
        var name = target.name;
        var value = target.value;

        this.setState({
            [name] : value
        });
        console.log(this.state);
    }

    onHandleSubmit(event){
        event.preventDefault();
        console.log(this.state);
    }

  render() {
    return (
        <div className="container">
            <div className="row">
                <ColorPicker 
                    color={this.state.color} 
                    onChangeColor={color => this.setState({color})}
                />
                <div className="col-lg-6">
                    <SizeSetting 
                        fontSize={this.state.fontSize} 
                        onReceiveFontSize={value => this.onReceiveFontSize(value)} 
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

            <div className="row mt-30">
                <div className="col-lg-12">
                <div className="card card-primary">
                    <div className="card-header">
                        Form
                    </div>
                    <div className="card-body">
                        <form onSubmit = { this.onHandleSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="txtUserName" 
                                    value={this.state.txtUserName}
                                    onChange={this.onHandleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        name="txtPassword" 
                                        value={this.state.txtPassword}
                                        onChange={this.onHandleChange}
                                    />
                            </div>
                            <div className="form-group">
                                <label>Mô tả</label>
                                    <textarea 
                                        className="form-control" 
                                        rows="3"
                                        name="txtDesc"
                                        value={this.state.txtDesc} 
                                        onChange={this.onHandleChange}
                                    />
                            </div>
                            <div className="form-group">
                                <label>Giới tính:</label>
                                <select 
                                    className="form-control" 
                                    name="sltGender" 
                                    value={this.state.sltGender}
                                    onChange={this.onHandleChange}
                                >
                                    <option value={0}>Nữ</option>
                                    <option value={1}>Nam</option>
                                </select>
                            </div>

                            <div className="radio mt-30">
                            <label>Ngôn ngữ:</label><br />
                                <label>
                                    <input 
                                        type="radio" 
                                        name="rdLang" 
                                        value="en" 
                                        onChange={this.onHandleChange}
                                        checked = { this.state.rdLang === "en"}
                                        />&nbsp;
                                    Tiếng Anh
                                </label>
                                <br />
                                <label>
                                    <input 
                                        type="radio" 
                                        name="rdLang"
                                        value="vi" 
                                        onChange={this.onHandleChange}
                                        checked = { this.state.rdLang === "vi" }
                                        />&nbsp;
                                    Tiếng Việt
                                </label>
                            </div>

                            <button type="submit" className="btn btn-primary mt-30">Save</button>&nbsp;
                            <button type="submit" className="btn btn-danger mt-30">Delete</button>
                        </form>
                    </div>
                </div>
                </div>
            </div>

        </div>
    );
  }
}

export default App;