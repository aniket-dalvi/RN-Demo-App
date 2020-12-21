
export const SET_USER_DATA = "SET_USER_DATA"

const setUserData = data => ({
    type: SET_USER_DATA,
    data: data
});

const UserDetailsActions = {
    setUserData,
}

export default UserDetailsActions;