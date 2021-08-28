import React, { useState } from 'react'

export default function Login(props) {

    const [userLogin, setUserLogin] = useState({ userName: '', passWord: '' })

    console.log(userLogin);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserLogin({
            ...userLogin,
            [name]:value
        })
    }
    const handleLogin = (event) => {
        event.preventDefault();
        if(userLogin.userName === 'cyberlearn' && userLogin.passWord === 'cyberlearn') {
            // Đăng nhập thành công thì chuyển về trang trước đó
            // props.history.goBack();


            // Chuyển đến trang chỉ định sau khi xử lý
            // Chuyển hướng đến path tương ứng
            props.history.push('/home');

            // replace thay đổi nội dung path tương ứng
            // props.history.replace('/home');
        }else {
            alert('Login fail !')
            return
        }
    }

    return (
        <form className="container" onSubmit={handleLogin}>
            <div className="form-group">
                <p>User Name</p>
                <input name="userName" className="form-control" onChange={handleChange}></input>
            </div>
            <div className="form-group">
                <p>Password</p>
                <input name="passWord" className="form-control" onChange={handleChange}></input>
            </div>
            <div className="form-group">
               <button className="btn btn-success">Đăng nhập</button>
            </div>
        </form>
    )
}