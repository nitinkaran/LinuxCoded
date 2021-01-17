export const selectedPlayerForBet = (playerData) => {
    return {
        type : 'SELECTED_FOR_PLAYING',
        payload : playerData
    }
};

export const playedTheBet = (playerData) => {
    return {
        type : 'PLAYED_BET',
        payload : playerData
    }
}