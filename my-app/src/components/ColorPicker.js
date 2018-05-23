import React, { Component } from 'react';

class ColorPicker extends Component {
  render() {
    return (
            <div className="col-lg-6">
                <div className="card bg-dark">
                    <div className="card-header text-white">
                        Color Picker
                    </div>
                    <div className="card-body">
                        <span></span>
                    </div>
                </div>
            </div>
    );
  }
}

export default ColorPicker;