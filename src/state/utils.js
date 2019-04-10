export const createType = (type) => {
    return {
        [`${type}`]: `${type}`,
    };
};

export const createTypeWithModifiers = (type) => {
    return {
        [`${type}`]: `${type}`,
        [`${type}_REQUEST`]: `${type}_REQUEST`,
        [`${type}_SUCCESS`]: `${type}_SUCCESS`,
        [`${type}_FAILURE`]: `${type}_FAILURE`,
    };
};

export const createAction = (type, additionalParams) => {
    if (!type) {
        throw new Error('[getAction] Passed action type is undefined!');
    }

    return (params = {}) => {
        return {
            type,
            ...additionalParams,
            ...params,
        };
    };
};

export const updateState = oldState => newState => ({
    ...oldState,
    ...newState,
});
