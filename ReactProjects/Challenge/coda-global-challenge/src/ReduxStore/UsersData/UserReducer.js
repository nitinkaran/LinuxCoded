const initialState = {};

const UserReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case 'USERS' : return{
            participatingPlayers: payload
        }

        default : return state;
    }
};

export default UserReducer;