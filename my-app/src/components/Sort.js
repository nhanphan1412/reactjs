import React, { Component } from 'react';

class Sort extends Component {

    render() {
      return (
        <div className="col-6 searchWrap">
            <div className="dropdown">
                <button className="btn btn-primary btn_sort" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    Sắp xếp&nbsp;
                    <i className="fa fa-caret-square-o-down" aria-hidden="true"></i>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item">
                        <i className="fa fa-sort-alpha-asc" aria-hidden="true"></i> Tên A-Z</a>
                    <a className="dropdown-item">
                        <i className="fa fa-sort-alpha-desc" aria-hidden="true"></i> Tên Z-A</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item">Trạng thái kích hoạt</a>
                    <a className="dropdown-item">Trạng thái ẩn</a>
                </div>
            </div>
        </div>
        );
    }
  }
  
  export default Sort;