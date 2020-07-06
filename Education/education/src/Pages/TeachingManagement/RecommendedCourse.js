import React from 'react'

class RecommendedCourse extends React.Component {
    render() {
        return (
            <div>
                RecommendedCourse
                {this.props.children}
            </div>
        )
    }
}

export {RecommendedCourse as default}