import React, { Component } from 'react';

class TaskItem extends Component {

    render() {
        var { task, index } = this.props;
      return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span className={task.status === true ? "badge badge-success" : "badge badge-danger" }>{task.status === true ? "Kích hoạt" : "Ẩn"}</span>
                </td>
                <td className="text-center">
                    <button className="btn btn-warning text-white">
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Sửa</button>&nbsp;
                    <button className="btn btn-danger">
                        <i className="fa fa-trash" aria-hidden="true"></i> Xóa</button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;