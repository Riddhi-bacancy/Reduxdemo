const initialState = {
    person : {
        age : 20
    },
    history:[]
};

const myReducer = (state = initialState,action) => {
    // const newState = {...state};
    if(action.type === 'AGE_UP'){
        return{
            
            person : {
                age : state.person.age += action.payload
            },
            history : [...state.history,state.person.age]
          
        }
       
    }
    else if(action.type === 'AGE_DOWN'){
        return{
            person : {
                age : state.person.age -= action.payload
            },
            history : [...state.history,state.person.age]

          
        }
    }
    return state;
}

export default myReducer;