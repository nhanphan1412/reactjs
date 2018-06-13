import React, { Component } from 'react';

class TaskForm extends Component {

  constructor(props){
    super(props);
      this.state = {
          id: '',
          name : '',
          status : false
      }
  }

  componentWillMount(){
    if(this.props.task){
      this.setState({
        id : this.props.task.id,
        name : this.props.task.name,
        status : this.props.task.status
      });
      console.log(this.state);
    }
  }

  onCloseForm = () => {
      this.props.onCloseForm();
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === 'status'){
      value = target.value === 'true' ? true : false;
    }
    this.setState({
      [name] : value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.onClear();
    this.onCloseForm();
  }

  onClear = () => {
    this.setState({
        name : '',
        status: false
    });
    console.log(this.state);
  }

  render() {
    var { id } = this.state;
    return (
        <div className="card">
            <div className="card-header bg-warning">
                <h5 className="panel-title">
                    { id !== '' ? 'Cập nhật công việc' : 'Thêm công việc' }
                    <span onClick = { this.onCloseForm.bind(this) }><i className="fa fa-times-circle text-red pull-right" aria-hidden="true"></i></span>
                </h5>
            </div>
            <div className="card-body">
                <form onSubmit={ this.onSubmit.bind(this) }>
                    <div className="form-group">
                        <label>Tên :</label>
                        <input type="text" className="form-control" name="name" value={ this.state.name } onChange={ this.onChange.bind(this)} />
                    </div>
                    <label>Trạng Thái :</label>
                    <select className="form-control" required="required" name="status" value={ this.state.status } onChange={ this.onChange.bind(this) }>
                        <option value={ true }>Kích Hoạt</option>
                        <option value={ false }>Ẩn</option>
                    </select>
                    <div className="text-center mt-30">
                        <button type="submit" className="btn btn-warning text-white">
                            <i className="fa fa-floppy-o" aria-hidden="true"></i> Thêm</button>&nbsp;
                        <button className="btn btn-danger" onClick={ this.onClear.bind(this) }>
                            <i className="fa fa-times" aria-hidden="true"></i> Hủy Bỏ</button>
                    </div>
                </form>
            </div>
        </div>
        );
    }
}

export default TaskForm;
