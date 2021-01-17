const initialState = {};

const ParticipantReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case 'SELECTED_FOR_PLAYING' : return {
            SelectedPlayersForBet  : payload
        }

        case 'PLAYED_BET' : return {
            SelectedPlayersForBet : payload
        }
        default : return state;
    }
};

export default ParticipantReducer;