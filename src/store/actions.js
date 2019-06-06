const ageUpAsnc = (val) => {
    return {
        type: "AGE_UP",
        payload: val
    }
};
export const ageUp = val => {
    return dispatch => {
        setTimeout(() => {
            dispatch(ageUpAsnc(val));
        }, 5000)
    }
};

const ageDownAsnc = (val) => {
    return {
        type: "AGE_DOWN",
        payload: val
    }
};
export const ageDown = val => {
    return dispatch => {
        setTimeout(() => {
            dispatch(ageDownAsnc(val));
        }, 5000)
    }
};

