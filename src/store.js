// import { createStore, applyMiddleware } from 'redux';

// import { combineEpics } from 'redux-observable';

// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/catch';
// import { ajax } from 'rxjs/observable/dom/ajax';



// const initialState = {
//     empDetails: {},
//     isLoading: false,
//     error: false
// };

// export const FETCH_EMPDETAILS = 'FETCH_EMPDETAILS';
// export const FETCH_EMPDETAILS_SUCCESS = 'FETCH_EMPDETAILS_SUCCESS';
// export const FETCH_EMPDETAILS_FAILURE = 'FETCH_EMPDETAILS_FAILURE';

// export const fetchEmpDetials = () => ({
//     type: FETCH_EMPDETAILS,
// });

// export const fetchEmpDetialsSuccess = (data) => ({
//     type: FETCH_EMPDETAILS_SUCCESS,
//     payload: data
// });

// export const fetchEmpDetialsFailure = (message) => ({
//     type: FETCH_EMPDETAILS_FAILURE,
//     payload: message
// });

// export default function rootReducer(state = initialState, action) {
//     switch (action.type) {
//         case FETCH_EMPDETAILS:
//             return {
//                 ...state,
//                 isLoading: true,
//                 error: null
//             };
//         case FETCH_EMPDETAILS_SUCCESS:
//             return {
//                 empDetails: {...action.payload},
//                 isLoading: false,
//                 error: null
//             };
//         case FETCH_EMPDETAILS_FAILURE:
//             return {
//                 empDetails: {},
//                 isLoading: false,
//                 error: action.payload
//             };
//         default:
//             return state;
//     }
// }

// const url = 'https://reqres.in/api/users/'; 

// export function fetchEmployyeDetailsEpic(action$, id) { 
//     return ajax
//     .getJSON(url+id)
//     .map(res => 
//         {
//             fetchEmpDetialsSuccess(res.data)
//         })
// }
// export const rootEpic = combineEpics(fetchEmployyeDetailsEpic);
// //const epicMiddleware = createEpicMiddleware(rootEpic);

// export const store = createStore(rootReducer, applyMiddleware(rootEpic));