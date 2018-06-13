import React, { Component } from 'react';

class TaskItem extends Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDelete = () => {
        this.props.onDelete(this.props.task.id);
    }

    onUpdate = () => {
      this.props.onUpdate(this.props.task.id);
    }

    render() {
        var { task, index } = this.props;
      return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span className={task.status === true ? "badge badge-success" : "badge badge-danger" } onClick={ this.onUpdateStatus.bind(this) }>{task.status === true ? "Kích hoạt" : "Ẩn"}</span>
                </td>
                <td className="text-center">
                    <button className="btn btn-warning text-white" onClick={ this.onUpdate.bind(this) }>
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Sửa</button>&nbsp;
                    <button className="btn btn-danger" onClick={ this.onDelete.bind(this) }>
                        <i className="fa fa-trash" aria-hidden="true"></i> Xóa</button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;
