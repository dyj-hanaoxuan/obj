import React from 'react'

class textbook extends React.Component {
    render() {
        return (
            <div>
                用户管理
                {this.props.children}
            </div>
        )
    }
}

export {textbook as default}