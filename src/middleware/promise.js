export default store => next => action => {
    // code goes here

    if(!action.payload || !action.payload.then){
        return next(action);
    }

    action.payload.then( resp => {
        const newAction = {
            ...action,
            payload: resp
        };

        store.dispatch(newAction);
    });
}

// export default function(store){
//     return function(next){
//         return function(action){
//             // code goes here
//         }
//     }
// }
