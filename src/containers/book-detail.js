import React from 'react'
import {connect} from 'react-redux'

class BookDetail extends React.Component {



    render() {
        const activeBook = this.props.activeBook

        if(!activeBook) return <div>Select a book to get started</div>
        else {
            return (
                <div>
                    <h5>title: {activeBook.title}</h5>
                    <h6>pages: {activeBook.pages}</h6>
                </div>
            )
        }
        
    }
}

function mapStateToProps({activeBook}) {
    return {
        activeBook
    }
}

export default connect(mapStateToProps)(BookDetail)
