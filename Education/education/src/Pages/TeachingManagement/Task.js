import React from 'react'

class Task extends React.Component {
    render() {
        return (
            <div>
                Task
                {this.props.children}
            </div>
        )
    }
}

export { Task as default}