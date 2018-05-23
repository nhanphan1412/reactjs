import React, { Component } from 'react';

class SizeSetting extends Component {
  render() {
    return (
                <div className="card bg-success">
                    <div className="card-header text-white">
                        <h3>Size: 15px</h3>
                    </div>
                    <div className="card-body">
                        <button type="button" className="btn btn-warning">Giảm</button>&nbsp;
                        <button type="button" className="btn btn-danger">Tăng</button>
                    </div>
                </div>
    );
  }
}

export default SizeSetting;