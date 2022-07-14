import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
// import {Reducers} from "../reducers/Reducers"

const client = axios.create({ //all axios can be used, shown in axios documentation
  baseURL:'http://localhost:3000',
  responseType: 'json'
});

let store = createStore(
//   Reducers, //custom reducers
  applyMiddleware(
    //all middlewares
    ...
    axiosMiddleware(client)//second parameter options can optionally contain onSuccess, onError, onComplete, successSuffix, errorSuffix
    // ,...
  )
)
export default store;