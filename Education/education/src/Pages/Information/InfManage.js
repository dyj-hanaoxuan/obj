import React from 'react'

class InfManage extends React.Component {
    render() {
        return (
            <div>
                InfManage
                {this.props.children}
            </div>
        )
    }
}

export {InfManage as default}