import React from 'react'
import {connect} from 'react-redux'

import {bindActionCreators} from 'redux'
import {selectBook} from '../actions/index'



class BookList extends React.Component {

    renderList() {
        return this.props.books.map(
        book => (
        <li 
        onClick={ () => this.props.selectBook(book) } 
        key={book.title} 
        className='list-group-item' >{book.title}</li>)
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


function mapSteteToProps({books}) {
    return {
        books
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

export default connect(mapSteteToProps, mapDispatchToProps)(BookList)
