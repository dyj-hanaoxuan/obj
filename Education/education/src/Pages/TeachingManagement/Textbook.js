import React from 'react'

class textbook extends React.Component {
    render() {
        return (
            <div>
<<<<<<< HEAD
                Textbook
                教材管理
=======
                用户管理
                {this.props.children}
>>>>>>> 7e352acdb5b3c63260cb12889da903a833f9f055
            </div>
        )
    }
}

export {textbook as default}