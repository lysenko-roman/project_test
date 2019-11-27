import { combineReducers } from 'redux';
import author from '../components/pages/Author/reducer';
import clients from '../components/pages/Clients/reducer';

export default combineReducers({
    clients,
    author,
})