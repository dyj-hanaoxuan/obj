import React from 'react'

class RequiredSubjects extends React.Component {
    render() {
        return (
            <div>
                RequiredSubjects
                {this.props.children}
            </div>
        )
    }
}

export {RequiredSubjects as default}