import {createStore} from 'redux';
import { dataReducer } from './reducer/DataReducer';


export const store = createStore(dataReducer);