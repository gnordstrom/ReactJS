// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const UNDO = "UNDO";
const REDO = "REDO";

const initialState = {
    count: 0,
    title: 'Gucci',
    futureValues: [],
    previousValues: []
}

export default function counter( state = initialState, action ) {
    switch (action.type) {
        case INCREMENT:
            return Object.assign( {}, state, { 
                count: state.count + action.amount,
                futureValues: [],
                previousValues: [ ...state.previousValues, state.count ] 
            } );
            // return { count: state.count + action.amount};
        case DECREMENT:
            return Object.assign( {}, state, { 
                  count: state.count - action.amount
                , futureValues: []
                , previousValues: [ ...state.previousValues, state.count ] 
            } );
        case UNDO:
            return Object.assign( {}, state, {
                  count: state.previousValues[ state.previousValues.length -1]
                , futureValues: [ ...state.futureValues, state.count ]
                , previousValues: state.previousValues.slice( 0, state.previousValues.length - 1)
            })
        case REDO:
            return Object.assign( {}, state, {
                  count: state.futureValues[ state.futureValues.length -1]
                , futureValues: state.futureValues.slice( 0, state.futureValues.length - 1)
                , previousValues: [ ...state.previousValues, state.count ]
            })
    }
    return state;
}

export function increment( amount ) {
    return { amount, type: INCREMENT };
}

export function decrement( amount ) {
    return { amount, type: DECREMENT };
}

export function undo() {
    return { type: UNDO };
}

export function redo() {
    return { type: REDO };
}