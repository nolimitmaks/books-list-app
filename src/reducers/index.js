import  { combineReducers } from 'redux'

import BooksReducer from './reducer_books'
import CarsReducer from './reducer_cars'

const rootReducer = combineReducers({
    books: BooksReducer,
    cars: CarsReducer
})

export default rootReducer