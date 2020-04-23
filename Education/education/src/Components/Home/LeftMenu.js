import React from 'react'
import {Menu} from "antd";
import { inject,observer} from "mobx-react";
import {NavLink} from 'react-router-dom'
// import * as antIcons from '@ant-design/icons';
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
    //             return <Menu.Item key={item.menuId}><NavLink to={item.menuUrl}>{item.menuName}</NavLink></Menu.Item>
    //         } else {
    //             return <SubMenu key={item.menuId} icon={<LaptopOutlined />} title={item.menuName}>
    //                 {this.bindMenu(item.menuChilds)}
    //             </SubMenu>
    //         }
    //     })
    //     return MenuList
    //
    // }

    bingMenu(menuList){
        let MenuList = menuList.map((item)=>{
            if(item.menuChilds.length===0){  //没有子菜单
                // let IconMenu =antIcons[item.menuImgClass]
                return <Menu.Item key={item.menuId}>
                    <NavLink to={item.menuUrl}>{item.menuName}</NavLink>
                </Menu.Item>
            }else {
                // let IconMenu =antIcons[item.menuImgClass];
                return <SubMenu key={item.menuId} title={item.menuName}>
                    {this.bingMenu(item.menuChilds)}
                </SubMenu>
            }
        })
        return MenuList
    }
    componentDidMount() {
        let menuList = this.bingMenu(this.props.usersLogin.user.menuInfo)
        this.setState({
            leftMenu:menuList
        })
    }
    render() {
        // let Nav = this.state.LeftMenu.map((item)=>{
        //     return  <Menu.Item theme="dark" key={item.menuId}>
        //         <NavLink to={
        //             {
        //                 pathname:`${item.menuUrl}`,
        //                 query:{id:item.menuUrl},
        //                 state:{
        //                     title:`${item.menuName}`
        //                 }
        //             }}>{item.menuName}</NavLink>
        //     </Menu.Item>
        // })
        return (
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
            >
                <SubMenu key="sub1" title='教育管理系统'>
                    {this.state.leftMenu}
                </SubMenu>
            </Menu>
        )
    }
}

export {LeftMenu as default}