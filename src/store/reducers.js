import store from 'store';
const initialState = {
    homePagePosts: [],
    username: store.get('username')
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'setHomePagePosts':
            return {
                ...state,
                homePagePosts: action.value
            };
        case 'setUsername':
            return {
                ...state,
                username: action.value
            };
        default:
            return state;
    }
};
export default reducer;
