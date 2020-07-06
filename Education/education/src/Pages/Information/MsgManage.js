import React from 'react'

class MsgManage extends React.Component {
    render() {
        return (
            <div>
                MsgManage
                {this.props.children}
            </div>
        )
    }
}

export {MsgManage as default}