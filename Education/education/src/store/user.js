import {observable,action} from "mobx";
import React, {Component} from "react";
import api from '../Api/index'
import axios from '../Axios'
class user extends Component{
    @observable user = localStorage.getItem('user')?JSON.parse():[];
    @observable isLogin = false;
    @observable token = localStorage.getItem('token')?JSON.parse():[];
    @action
    login=()=>{
        // return new Promise((resolve,reject)=>{
        //     axios.post('api'+Api.Nav.Navbar,
        //         {userName:'xxx',userPwd:123}
        //     )
        //         .then((res)=>{
        //             if (res.data.Code===200){
        //                 console.log(res)
        //                 this.TeachingManagement = res.data.data;
        //                 this.token = res.data.token
        //                 resolve('登录成功')
        //             }else {
        //                 reject('登录失败')
        //             }
        //         })
        //
        // }).then((data)=>{
        //     console.log(data)
        // })
        return new Promise((resolve,reject)=> {
            axios({
                method: 'post',
                url: api.Nav.Navbar,
                data: {
                    userName: 'xxx',
                    userPwd: 123
                },
                timeout: 20000,
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(res => {
                this.user = res.data.data;
                this.token = res.data.token
                resolve(res)
            }).catch(err =>{
                reject(err)
            })
        }).then((data)=>{
            console.log(data)
        })
    }
}
export default user