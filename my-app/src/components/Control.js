import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {

    render() {
      return (
          <div className="row">
            { /* Search */ }
                <Search onSearch = { this.props.onSearch } />
            { /* End Search */ }
            { /* Sort */ }
                <Sort />
            { /* End Sort */ }
            </div>
        );
    }
  }

  export default Control;
