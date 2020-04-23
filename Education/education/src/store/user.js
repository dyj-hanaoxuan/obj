import {observable,action} from "mobx";
import axios from 'axios'
import Api from '../Api/index'
class user {
    @observable user = [];
    @observable isLogin = false;
    @observable token = '';
    @action
    login=()=>{
        return new Promise((resolve,reject)=>{
            axios.post('api'+Api.Nav.Navbar,
                {userName:'xxx',userPwd:123}
            )
                .then((res)=>{
                    if (res.data.Code===200){
                        console.log(res)
                        this.user = res.data.data;
                        this.token = res.data.token
                        resolve('登录成功')
                    }else {
                        reject('登录失败')
                    }
                })

        }).then((data)=>{
            console.log(data)
        })
    }
}
export default user