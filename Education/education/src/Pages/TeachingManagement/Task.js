import React from 'react'

class Task extends React.Component {
    render() {
        return (
            <div>
                Task
<<<<<<< HEAD
                任务管理
=======
                {this.props.children}
>>>>>>> 7e352acdb5b3c63260cb12889da903a833f9f055
            </div>
        )
    }
}

export { Task as default}