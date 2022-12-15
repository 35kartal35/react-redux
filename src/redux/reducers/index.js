import {combineReducers} from 'redux';
import { productReducer } from './pruductReducer';

const reducers = combineReducers({
    allProducts: productReducer,
});

export default reducers;