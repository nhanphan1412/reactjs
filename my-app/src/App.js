import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
        <div className="container manageJob">
            <div className="row">
                <div className="col-12 text-center mt-30">
                    <h1>QUẢN LÝ CÔNG VIỆC</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <button className="btn btn-primary">
                    <i className="fa fa-plus" aria-hidden="true"></i> Thêm công việc
                    </button>
                </div>
            </div>

            <div className="row">
                <div className="col-6 searchWrap">
                    <input type="text" className="input_search" value="" placeholder="Nhập từ khóa..." name="txtSearch" />
                    <button type="button" className="btn btn-primary btn_search"><i className="fa fa-search" aria-hidden="true"></i> Tìm</button>
                </div>

                <div className="col-6 searchWrap">
                    <div class="dropdown">
                        <button className="btn btn-primary btn_sort" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sắp xếp <i className="fa fa-caret-square-o-down" aria-hidden="true"></i>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#"><i className="fa fa-sort-alpha-asc" aria-hidden="true"></i> Tên A-Z</a>
                            <a className="dropdown-item" href="#"><i className="fa fa-sort-alpha-desc" aria-hidden="true"></i> Tên Z-A</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Trạng thái kích hoạt</a>
                            <a className="dropdown-item" href="#">Trạng thái ẩn</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <table className="table mt-30">
                        <thead className="thead-light">
                            <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>
                            <input type="text" className="form-control" placeholder="Nhập tên..." />
                            </td>
                            <td>
                                <div className="form-group">
                                    <select className="form-control" id="exampleSelect1">
                                    <option>Tất cả</option>
                                    <option>Kích hoạt</option>
                                    <option>Ẩn</option>
                                    </select>
                                </div>
                            </td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Học lập trình Angular 5</td>
                            <td className="text-center"><span className="badge badge-success">Kích hoạt</span></td>
                            <td className="text-center">
                                <button className="btn btn-warning text-white"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Sửa</button>&nbsp;
                                <button className="btn btn-danger"><i className="fa fa-trash" aria-hidden="true"></i> Xóa</button>
                            </td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Đi bơi</td>
                            <td className="text-center"><span className="badge badge-danger">Ẩn</span></td>
                            <td className="text-center">
                                <button className="btn btn-warning text-white"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Sửa</button>&nbsp;
                                <button className="btn btn-danger"><i className="fa fa-trash" aria-hidden="true"></i> Xóa</button>
                            </td>
                            </tr>
                            <tr>
                            <td>4</td>
                            <td>Đi học</td>
                            <td className="text-center"><span className="badge badge-success">Kích hoạt</span></td>
                            <td className="text-center">
                                <button className="btn btn-warning text-white"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Sửa</button>&nbsp;
                                <button className="btn btn-danger"><i className="fa fa-trash" aria-hidden="true"></i> Xóa</button>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
  }
}

export default App;