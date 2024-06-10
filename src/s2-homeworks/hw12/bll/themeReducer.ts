const initState = {
    themeId: 1, // Начальное значение темы
};

export type StateType = {
    themeId: number;
};

type ActionType = ReturnType<typeof changeThemeId>;

export const themeReducer = (state = initState, action: ActionType): StateType => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id,
            };
        default:
            return state;
    }
};

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id });
