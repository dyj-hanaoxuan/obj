import React, { Component } from 'react'
import { ExclamationCircleOutlined} from '@ant-design/icons';
import { Modal, Table, Tag, Space, Button, Divider } from 'antd';
import './Product.css';
function confirm() {
    Modal.confirm({
        title: 'Confirm',
        icon: <ExclamationCircleOutlined / > ,
        content: '确定要删除吗？',
        okText: '确认',
        cancelText: '取消',
    });
}
 const columns = [{
         title: 'Name',
         dataIndex: 'name',
         key: 'name',
         render: text => < a > {
             text
         } </a>,
     },
     {
         title: 'Age',
         dataIndex: 'age',
         key: 'age',
     },
     {
         title: 'Address',
         dataIndex: 'address',
         key: 'address',
     },
     {
         title: 'Tags',
         key: 'tags',
         dataIndex: 'tags',
         render: tags => ( <
             > {
                 tags.map(tag => {
                     let color = tag.length > 5 ? 'geekblue' : 'green';
                     if (tag === 'loser') {
                         color = 'volcano';
                     }
                     return ( <
                         Tag color = {
                             color
                         }
                         key = {
                             tag
                         } > {tag.toUpperCase()} </Tag>
                     );
                 })
             } </>
         ),
     },
     {
         title: 'Action',
         key: 'action',
         render: (text, record) => ( <
             Space size = "middle" >
          <Button >修改</Button>
               <Button type="danger" onClick={confirm}>删除</Button></Space>
         ),
     },
 ];

 const data = [{
         key: '1',
         name: 'John Brown',
         age: 32,
         address: 'New York No. 1 Lake Park',
         tags: ['nice', 'developer'],
     },
     {
         key: '2',
         name: 'Jim Green',
         age: 42,
         address: 'London No. 1 Lake Park',
         tags: ['loser'],
     },
     {
         key: '3',
         name: 'Joe Black',
         age: 32,
         address: 'Sidney No. 1 Lake Park',
         tags: ['cool', 'teacher'],
     },
 ];

export default class ProductHome extends Component {
    render() {
        return (
            <div className="tab" >
            <Button className="btn" type="primary" >增加</Button>
                <Table columns={columns} dataSource={data} />
                </div>
           )
    }
}
