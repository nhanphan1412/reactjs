import React, { Component } from 'react';

class SizeSetting extends Component {

    changeSize(value){
        this.props.onReceiveFontSize(value);
    }

  render() {
    return (
        <div className="card bg-success">
            <div className="card-header text-white">
                <h3>Size: {this.props.fontSize}px</h3>
            </div>
            <div className="card-body">
                <button type="button" className="btn btn-warning" onClick={() => this.changeSize(-2)}>Giảm</button>&nbsp;
                <button type="button" className="btn btn-danger" onClick={() => this.changeSize(2)}>Tăng</button>
            </div>
        </div>
    );
  }
}

export default SizeSetting;