import React from 'react'
import {Menu} from "antd";
import { inject,observer} from "mobx-react";
import {NavLink} from 'react-router-dom'
import * as antIcons from '@ant-design/icons';
const { SubMenu } = Menu;
@inject('usersLogin')
@observer
class LeftMenu extends React.Component {
    constructor(){
        super()
        this.state = {
            leftMenu:[],
        }
    }
    //生成左边菜单
    // bindMenu=()=>{
    //     Axios.post(api.Nav.Navbar)
    //         .then(res => {
    //         console.log(res)
    //         this.setState({
    //             LeftMenu: res.data.data.menuInfo
    //         });
    //     })
    // }

    // bindMenu(menuList){
    //     let MenuList = menuList.map((item)=>{
    //         if(item.menuChilds.length===0){
    //             return <TeachingManagement.Item key={item.menuId}><NavLink to={item.menuUrl}>{item.menuName}</NavLink></TeachingManagement.Item>
    //         } else {
    //             return <SubMenu key={item.menuId} icon={<LaptopOutlined />} title={item.menuName}>
    //                 {this.bindMenu(item.menuChilds)}
    //             </SubMenu>
    //         }
    //     })
    //     return MenuList
    //
    // }
    componentWillMount() {
        // this.props.usersLogin.user
        // this.props.usersLogin.token
        let menuList = this.bingMenu(this.props.usersLogin.user.menuInfo)
        this.setState({
            leftMenu:menuList
        })
    }
    componentDidMount() {
        window.addEventListener('beforeunload',()=>{
            this.props.usersLogin.SetUser()
            this.props.usersLogin.SetUser()
        })
    }
    bingMenu(menuList){
        let MenuList = menuList.map((item)=>{
            if(item.menuChilds.length===0){  //没有子菜单
                let IconMenu =antIcons[item.menuImgClass]
                return <Menu.Item key={item.menuId}  icon={  <IconMenu />}>
                    <NavLink to={item.menuUrl}>{item.menuName}</NavLink>
                </Menu.Item>
            }else {
                let IconMenu =antIcons[item.menuImgClass];
                return <SubMenu key={item.menuId} title={item.menuName}  icon={  <IconMenu />}>
                    {this.bingMenu(item.menuChilds)}
                </SubMenu>
            }
        })
        return MenuList
    }

    render() {
        // let Nav = this.state.LeftMenu.map((item)=>{
        //     return  <TeachingManagement.Item theme="dark" key={item.menuId}>
        //         <NavLink to={
        //             {
        //                 pathname:`${item.menuUrl}`,
        //                 query:{id:item.menuUrl},
        //                 state:{
        //                     title:`${item.menuName}`
        //                 }
        //             }}>{item.menuName}</NavLink>
        //     </TeachingManagement.Item>
        // })
        return (
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['1']}
                style={{ height: '100%' }}
            >
                {this.state.leftMenu}
            </Menu>
        )
    }
}

export {LeftMenu as default}