import Actions from './legacyActions'

type State = {
    count: number,
    unit: string,
}

export const initialState: State = {
    count: 0,
    unit: 'pt',
}

export function reducer(state: State, action: Actions): State {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 }
        case 'DECREMENT':
            return { ...state, count: state.count - 1 }
        default:
            throw new Error()
    }
}