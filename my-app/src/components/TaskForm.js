import React, { Component } from 'react';

class TaskForm extends Component {

  render() {
    return (
        <div className="card">
            <div className="card-header bg-warning">
                <h5 className="panel-title">Thêm Công Việc
                    <i className="fa fa-times-circle text-red pull-right" aria-hidden="true"></i>
                </h5>
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label>Tên :</label>
                        <input type="text" className="form-control" />
                    </div>
                    <label>Trạng Thái :</label>
                    <select className="form-control" required="required">
                        <option value="1">Kích Hoạt</option>
                        <option value="0">Ẩn</option>
                    </select>
                    <div className="text-center mt-30">
                        <button type="submit" className="btn btn-warning text-white">
                            <i className="fa fa-floppy-o" aria-hidden="true"></i> Thêm</button>&nbsp;
                        <button type="submit" className="btn btn-danger">
                            <i className="fa fa-times" aria-hidden="true"></i> Hủy Bỏ</button>
                    </div>
                </form>
            </div>
        </div>
        );
    }
}

export default TaskForm;