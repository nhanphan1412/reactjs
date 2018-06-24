import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {

  constructor(props){
    super(props);
      this.state = {
        filterName : '',
        filterStatus : -1
      }
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilter(
      name === 'filterName' ? value : this.state.filterName,
      name === 'filterStatus' ? value : this.state.filterStatus,
    )
    this.setState({
      [name] : value
    }); 
  }

    render() {
        var { tasks } = this.props;
        var { filterName, filterStatus } = this.state;
        var elmTasks = tasks.map((task, index) => {
            return <TaskItem
                        key = {task.id}
                        index = {index}
                        task = {task}
                        onUpdateStatus = { this.props.onUpdateStatus }
                        onDelete = { this.props.onDelete }
                        onUpdate = { this.props.onUpdate }
                    />
        });

      return (
        <table className="table">
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
                    <td></td>
                    <td>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nhập tên..."
                          name="filterName"
                          value = { filterName }
                          onChange = { this.onChange }
                        />
                    </td>
                    <td>
                        <div className="form-group">
                            <select
                              className="form-control"
                              id="exampleSelect1"
                              name="filterStatus"
                              value = { filterStatus }
                              onChange = { this.onChange }
                            >
                                <option>Tất cả</option>
                                <option>Kích hoạt</option>
                                <option>Ẩn</option>
                            </select>
                        </div>
                    </td>
                    <td></td>
                </tr>
                { elmTasks }
            </tbody>
        </table>
      );
    }
}

export default TaskList;
