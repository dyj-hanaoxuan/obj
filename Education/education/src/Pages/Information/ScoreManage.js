import React from 'react'

class ScoreManage extends React.Component {
    render() {
        return (
            <div>
                ScoreManage
                {this.props.children}
            </div>
        )
    }
}

export {ScoreManage as default}