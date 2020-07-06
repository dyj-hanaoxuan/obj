import React from 'react'

class RequiredCourses extends React.Component {
    render() {
        return (
            <div>
                RequiredCourses
                {this.props.children}
            </div>
        )
    }
}

export {RequiredCourses as default}