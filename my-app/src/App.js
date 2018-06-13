import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            tasks : [],
            isDisplayForm: false
        }
    }

    componentWillMount(){
        if(localStorage && localStorage.getItem('tasks')){
            var tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        this.setState({
            tasks : tasks
        });
    }

    s4(){
        return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateID(){
        return this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4()
    }

    onToggleForm = () => {
        this.setState({
          isDisplayForm : true
        });
    }

    onCloseForm = () => {
        this.setState({
          isDisplayForm : false
        });
    }

    onSubmit = (data) => {
        var { tasks } = this.state;
        data.id = this.generateID();
        tasks.push(data);
        this.setState({
            tasks : tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    onUpdateStatus = (id) => {
      var { tasks } = this.state;
      var index = this.findIndex(id);
      console.log(id);
      if(index !== -1){
        tasks[index].status = !tasks[index].status;
        this.setState({
            tasks : tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    }

    findIndex = (id) => {
      var { tasks } = this.state;
      var result = -1;
      tasks.forEach((task, index) => {
        if(task.id === id){
          result = index;
        }
      });
      return result;
    }

    onDelete = (id) => {
      var { tasks } = this.state;
      var index = this.findIndex(id);
      console.log(id);
      if(index !== -1){
        tasks.splice(index, 1);
        this.setState({
            tasks : tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
      this.onCloseForm();
    }

    onUpdate = () => {
       this.setState({
          isDisplayForm : true
       });
    }

  render() {
      var { tasks, isDisplayForm } = this.state;
      var elmTaskForm = isDisplayForm === true ? <TaskForm onSubmit={ this.onSubmit } onCloseForm= { this.onCloseForm } /> : '';
    return (
        <div className="container manageJob">
            <div className="row">
                <div className="col-12 text-center mt-30">
                    <h1>QUẢN LÝ CÔNG VIỆC</h1>
                </div>
            </div>

            <div className="row mt-30">
                <div className= { isDisplayForm ? 'col-4' : '' }>
                    { /* Form */ }
                    { elmTaskForm }
                    { /* End Form */ }
                </div>

                <div className={ isDisplayForm ? 'col-8' : 'col-12' }>
                    <div className="row">
                        <div className="col-12">
                            <button className="btn btn-primary" onClick={ () => this.onToggleForm() }>
                                <i className="fa fa-plus" aria-hidden="true"></i> Thêm công việc
                            </button>
                        </div>
                    </div>
                    { /* Search - Sort */ }
                        <Control />
                    { /* End Search - Sort */ }
                    { /* List */ }
                    <div className="row mt-30">
                        <div className="col-12">
                            <TaskList tasks={tasks} onUpdateStatus={ this.onUpdateStatus } onDelete = { this.onDelete }  onUpdate = { this.onUpdate }/>
                        </div>
                    </div>
                    { /* End List */ }
                </div>
            </div>
        </div>
    );
  }
}

export default App;
