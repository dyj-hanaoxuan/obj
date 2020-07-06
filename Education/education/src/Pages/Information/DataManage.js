import React from 'react'

class DataManage extends React.Component {
    render() {
        return (
            <div>
                DataManage
                {this.props.children}
            </div>
        )
    }
}

export {DataManage as default}