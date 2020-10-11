import React from 'react'
import {connect} from 'react-redux'


class BookList extends React.Component {

    renderList() {
        return this.props.books.map(
        book => (<li key={book.title} className='list-group-item' >{book.title}</li>)
        )
    }
    
    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }
}

// use ES6 
function mapSteteToProps({books}) {
    return {
        books
    }
}

export default connect(mapSteteToProps)(BookList)
