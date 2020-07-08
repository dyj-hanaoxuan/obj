import React from 'react'
import {Route,Link} from 'react-router-dom'
import {inject,observer} from "mobx-react";
import loadable from '@loadable/component'
import AddCourse from '../Components/Add/AddCourse';
import AddElectiveCourses from '../Components/Add/AddElectiveCourses';
import AddRequiredCourseTime from '../Components/Add/AddRequiredCourseTime';
@inject('usersLogin')
@observer
class Router extends React.Component {
    constructor(){
        super()
        this.state = {
            routerList:[],
            TabList:[]
        }
    }

    bindRouter(list){
        let routerList= list.map((item)=>{
            if(item.menuChilds.length===0){
                return  <Route key={item.menuId} path={item.menuUrl} component={ loadable(() => import(`./../Pages/${item.componentPath}`))}/>
                // return <TabPane tab={<Link to={`/`+item.menuUrl}>{item.menuName}</Link>} key={item.menuUrl}></TabPane>
            }else{

                // return  <Route key={item.menuId} path={item.menuUrl} render={() =>{
                //     let ComponentName =loadable(() => import(`./../Pages/${item.componentPath}`));
                //     return <ComponentName {...this.props}>
                //         {this.bindRouter(item.menuChilds)}
                //     </ComponentName>
                // }}>
                // </Route>

                return [...this.bindRouter(item.menuChilds),<Route key={item.menuId} path={item.menuUrl} component={ loadable(() => import(`./${item.componentPath}`))}/>]
                // return [...this.bindRouter(item.menuChilds),<TabPane tab={<Link to={`/`+item.menuUrl}>{item.menuName}</Link>} key={item.menuUrl}></TabPane>]
            }
        })
        return routerList;
    }

    componentDidMount() {
        let menuList = this.bindRouter(this.props.usersLogin.user.menuInfo)
        let menuInfoTab = this.props.usersLogin.user.menuInfo
        this.setState({
            routerList:menuList,
            TabList:menuInfoTab
        })
    }

    render() {
        return (
            <div>
                {this.state.routerList}
                <Route path='/Index/AddCourse'><AddCourse/></Route>
                <Route path='/Index/AddElectiveCourses'><AddElectiveCourses/></Route>
                <Route path='/Index/AddRequiredCourseTime'><AddRequiredCourseTime/></Route>
            </div>
        )
    }
}

export {Router as default}