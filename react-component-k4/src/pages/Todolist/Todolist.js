import React, { Component } from 'react'
import style from './Todolist.css';
import Axios from 'axios';
export default class Todolist extends Component {

    state = {
        taskList: []
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

    renderTaskToDoDOne = () => {
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

    render() {
        return (
            <div>
                <button onClick={() => { this.getTaskList() }}>Get task list</button>
                <div className="card">
                    <div className="card__header">
                        <img src="./img/X2oObC4.png" />
                    </div>
                    {/* <h2>hello!</h2> */}
                    <div className="card__body">
                        <div className="card__content">
                            <div className="card__title">
                                <h2>My Tasks</h2>
                                <p>September 9,2020</p>
                            </div>
                            <div className="card__add">
                                <input id="newTask" type="text" placeholder="Enter an activity..." />
                                <button id="addItem">
                                    <i className="fa fa-plus" />
                                </button>
                            </div>
                            <div className="card__todo">
                                {/* Uncompleted tasks */}
                                <ul className="todo" id="todo">
                                    {/* <li>
                                        <span>Đi ngủ</span>
                                        <div className="buttons">
                                            <button className="remove">
                                                <i className="fa fa-trash-alt" />
                                            </button>
                                            <button className="complete">
                                                <i className="far fa-check-circle" />
                                                <i className="fas fa-check-circle" />
                                            </button>
                                        </div>
                                    </li> */}
                                    {this.renderTaskTodo()}
                                </ul>
                                {/* Completed tasks */}
                                <ul className="todo" id="completed">
                                    {/* <li>
                                        <span>Ăn sáng</span>
                                        <div className="buttons">
                                            <button className="remove">
                                                <i className="fa fa-trash-alt" />
                                            </button>
                                            <button className="complete">
                                                <i className="far fa-check-circle" />
                                                <i className="fas fa-check-circle" />
                                            </button>
                                        </div>
                                    </li> */}
                                    {this.renderTaskToDoDOne()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
