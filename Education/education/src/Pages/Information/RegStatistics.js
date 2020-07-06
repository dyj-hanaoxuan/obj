import React from 'react'

class RegStatistics extends React.Component {
    render() {
        return (
            <div>
                RegStatistics
                {this.props.children}
            </div>
        )
    }
}

export {RegStatistics as default}