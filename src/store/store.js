import {  createStore } from '@reduxjs/toolkit'

import { reducers } from './reducer/reducers';


const store = createStore (
   reducers

)

export default store;