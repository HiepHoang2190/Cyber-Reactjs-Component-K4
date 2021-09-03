import React, { Component } from 'react'
import style from './Todolist.css';
import Axios from 'axios';
export default class Todolist extends Component {

    state = {
        taskList: [],
        values: {
            taskName: ''
        },
        errors: {
            taskName: ''
        }
    }
    getTaskList = () => {
        let promise = Axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
            method: 'GET'
        });

        promise.then((result) => {
            console.log(result.data);
            // Nếu gọi api lấy kết quả về thành công
            //  => set lại state của component
            this.setState({
                taskList: result.data
            })
            console.log('thành công');
        });
        promise.catch((err) => {
            console.log('thất bại');
            console.log(err.response.data)
        });
    }

    renderTaskTodo = () => {
        return this.state.taskList.filter(item => !item.status).map((item, index) => {
            return <li key={index}>
                <span>{item.taskName}</span>
                <div className="buttons">
                    <button className="remove">
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button className="complete">
                        <i className="far fa-check-circle" />
                        <i className="fas fa-check-circle" />
                    </button>
                </div>
            </li>
        })
    }

    renderTaskToDoDone = () => {
        return this.state.taskList.filter(item => item.status).map((item, index) => {
            return <li key={index}>
                <span>{item.taskName}</span>
                <div className="buttons">
                    <button className="remove">
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button className="complete">
                        <i className="far fa-check-circle" />
                        <i className="fas fa-check-circle" />
                    </button>
                </div>
            </li>
        })
    }

    // Hàm tự động thực thi sau khi nội dung component được render
    componentDidMount() {
        this.getTaskList();
    }

    handleChange = (e) => {
        let { value, name } = e.target;
        console.log(value, name);
        let newValues = { ...this.state.values };

        newValues = { ...newValues, [name]: value };
        let newErrors = { ...this.state.errors };
        let regexString = /^[a-z A-z]+$/;

        if (!regexString.test(value) || value.trim() === '') {
            newErrors[name] = name + ' invalid !';
        } else {
            newErrors[name] = '';
        }

        // newErrors = {...newErrors,[name]:value.trim() === ""}

        this.setState({
            ...this.state,
            values: newValues,
            errors: newErrors
        })
    }

    addTask = (e) => {
        e.preventDefault(); //Dừng sự kiên submit form
        console.log(this.state.values.taskName);
        let promise =  Axios({
            url:'http://svcy.myclass.vn/api/ToDoList/AddTask',
            method:'POST',
            data: {taskName:this.state.values.taskName}
        });
        // Xử lý thành công

        promise.then(result=>{
        //    alert(result.data);
            this.getTaskList();
        });

        //Xử lý thất bại
        promise.catch(errors => {
            alert(errors.response.data)
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addTask}>
                    {/* <button onClick={() => { this.getTaskList() }}>Get task list</button> */}
                    <div className="card">
                        <div className="card__header">
                            <img src="./img/X2oObC4.png" />
                        </div>
                        {/* <h2>hello!</h2> */}
                        <div className="card__body">
                            <div className="card__content">
                                <div className="form-group">
                                    <div className="card__title">
                                        <h2>My Tasks</h2>
                                        <p>September 9,2020</p>
                                    </div>
                                    <div className="card__add">
                                        <input name="taskName" id="newTask" onChange={this.handleChange} type="text" placeholder="Enter an activity..." />

                                        <button id="addItem" onClick = {this.addTask}>
                                            <i className="fa fa-plus" />
                                        </button>
                                    </div>
                                    <span className="text text-danger">{this.state.errors.taskName}</span>
                                </div>


                                <div className="card__todo">
                                    {/* Uncompleted tasks */}
                                    <ul className="todo" id="todo">
                                        {this.renderTaskTodo()}
                                    </ul>
                                    {/* Completed tasks */}
                                    <ul className="todo" id="completed">
                                        {this.renderTaskToDoDone()}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
