import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let stateCopy = [...state]
            stateCopy.sort((a, b) =>
                action.payload === 'up' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
            )
            return stateCopy
        }
        case 'check': {
            return state.filter((person) => person.age >= action.payload)
        }
        default:
            return state
    }
}
