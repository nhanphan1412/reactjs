import React, { Component } from 'react';

class Search extends Component {

    render() {
      return (
            <div className="col-6 searchWrap">
                <input type="text" className="input_search" value="" placeholder="Nhập từ khóa..." name="txtSearch" />
                <button type="button" className="btn btn-primary btn_search">
                    <i className="fa fa-search" aria-hidden="true"></i> Tìm</button>
            </div>
        );
    }
  }
  
  export default Search;