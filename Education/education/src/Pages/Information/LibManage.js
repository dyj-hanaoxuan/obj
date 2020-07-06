import React from 'react'

class LibManage extends React.Component {
    render() {
        return (
            <div>
                LibManage
                {this.props.children}
            </div>
        )
    }
}

export {LibManage as default}