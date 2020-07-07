import React from 'react'
import { Layout, Breadcrumb } from 'antd';
import LeftMenu from '../Components/Home/LeftMenu'
import head from '../Common/images/head.png'
import Router from '../Router/Router'
// import AddCourse from '../Components/Add/AddCourse';
const { Header, Content, Sider } = Layout;
class Index extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header className="header">
                        <div className="nav">
                            <h1>logo</h1>
                            <div>
                                <img src={head}/>
                                <span>管理员</span>
                            </div>
                            <div>admin</div>
                            <div>注销</div>
                        </div>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                            <Sider className="site-layout-background" width={200}>
                                <LeftMenu/>
                            </Sider>
                            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                <Router/>
                            </Content>
                        </Layout>
                    </Content>
                </Layout>
            </div>
        )
    }
}

export {Index as default}