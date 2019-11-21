import { combineReducers } from 'redux';
import author from '../components/pages/Author/reducer';
import clients from '../components/pages/Client/reducer';
import registration from '../components/pages/Forms/reducer';



export default combineReducers({
    clients,
    registration,
    author,

})