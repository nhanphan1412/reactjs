import React, { Component } from 'react';

class Result extends Component {
  
  render() {
    return (
        <div className="col-lg-12">
            <p>Color : {this.props.color} - Fontsize: {this.props.fontSize}px</p>
            <div id="content" style={{
              color : this.props.color,
              borderColor : this.props.color,
              fontSize: this.props.fontSize
            }}>
                Nội dung setting {this.props.color}
            </div>
        </div>
    );
  }
}

export default Result;