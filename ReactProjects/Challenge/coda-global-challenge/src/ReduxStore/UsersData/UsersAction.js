export const UsersAction = (data = []) => {    
    for(var i in data){
        data[i].Wins = 0;
        data[i].Loss = 0;
        data[i].Level = 1;
        data[i].Fate = '';
        data[i].Image= data[i]["Profile Image"]
    }
    return {
        type: 'USERS',
        payload: data
    }
};