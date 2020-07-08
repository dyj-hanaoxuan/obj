import React, { Component } from 'react'
import { Row, Col,Form, Select,Radio,Input,Button } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import '../../Common/css/AddCourse.css'
const { Option } = Select;
//新增必修课时组件

  // 下拉框
  function onChange(value) {
    console.log(`selected ${value}`);
  }
  
  function onBlur() {
    console.log('blur');
  }
  
  function onFocus() {
    console.log('focus');
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }
// 新增选修课程
class AddRequiredCourseTime extends Component {
    onFinish = values => {
        console.log(values);
      };
    //   下拉框
      onGenderChange = value => {
        this.formRef.current.setFieldsValue({
          note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
      };
      state = {
    loading: false,
  };
    render() {
        const uploadButton = (
            <div>
              {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
              <div className="ant-upload-text">Upload</div>
            </div>
          );
          const { imageUrl } = this.state;
        return (
            <div>
                <Row justify="center">
                    <Col span={24}>
                        <div>
                            <div className='addCourseDiv'>新增选修课程</div>
                            <Form labelAlign="right"
                            labelCol={{
                            span: 3,
                            pull:1,
                            offset:3
                            }}
                            wrapperCol={{
                            span: 10,
                            }} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                                <Form.Item name="gender" label="所属科目">
                                    <Select
                                        showSearch
                                        style={{ width: 200 }}
                                        placeholder="Select a person"
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onSearch={onSearch}
                                        filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="tom">Tom</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    name="name"
                                    label="课程名称"
                                    >
                                    <Input />
                                </Form.Item>
                                <Form.Item name="radio-group" label="等级">
                                    <Radio.Group>
                                    <Radio value="a">初级</Radio>
                                    <Radio value="b">中级</Radio>
                                    <Radio value="c">高级</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            
                              <Form.Item name={['user', 'introduction']} label="课程简介">
                                    <Input.TextArea rows='4'/>
                              </Form.Item>
                              <Form.Item name={['user', 'btnAdd']} style={{textAlign:"center"}} 
                              wrapperCol={{
                                span: 24,
                                }}>
                                <Button type="primary" htmlType="submit" id="btnSave">
                                保存
                                </Button>
                                <Button type="primary" htmlType="reset" id="cancel">
                                取消
                                </Button>
                              </Form.Item>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default AddRequiredCourseTime
