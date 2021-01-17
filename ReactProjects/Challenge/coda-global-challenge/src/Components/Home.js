import React, { Component } from 'react';
import {connect} from 'react-redux';
import _isEmpty from 'lodash/isEmpty';
import axios from 'axios';
import {UsersAction} from '../ReduxStore/UsersData/UsersAction';
import {selectedPlayerForBet} from '../ReduxStore/ModifyData/ParticipantAction'
import BetPage from './BetPage';
import Card from "react-bootstrap/Card";
import * as Icons from 'react-bootstrap-icons'

class Home extends Component {

    constructor(props) {
        super(props);        
        this.state = {
            selectedPlayers : [],
            firstList: [],
            lastList : [],
            arePlayersSelected : false,
            startGame: false,
            OpposingBetNumber: null
        };
        
        this.UpdateState = this.UpdateState.bind(this);
        this.selectPlayer = this.selectPlayer.bind(this);
    }
    
    componentDidMount(){
        
        axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json")
        .then(response => {
            this.props.storeUsersData(response.data);
        })
        .catch(response => {
            console.log(response.error);
        });
    }

    selectPlayer(item, event){
        console.log(event.target.checked);
        let previousItem = this.state.selectedPlayers;
        if (event.target.checked === true) {
            
            let playerAlreadyPresent = false;
            for(let p in previousItem){
                if(previousItem[p].Name === item.Name){
                    playerAlreadyPresent = true
                }
            }
            if(previousItem.length < 9 && !playerAlreadyPresent ){
                previousItem.push(item);
                this.props.selectedPlayerForBet(previousItem);
                this.setState({ selectedPlayers : previousItem, arePlayersSelected: true});
            }
        }else {
            if(previousItem.includes(item) === true){
                let index = previousItem.indexOf(item);
                previousItem.splice(index, 1);
            }

            if(previousItem.length >= 1){
                this.setState({ selectedPlayers : previousItem, arePlayersSelected: true});
            }else {
                this.setState({ selectedPlayers : previousItem, arePlayersSelected: false});
            }
        }
    }

    UpdateState(options){
        this.setState({...options});
    }

    render() {
        const { participatingPlayers={} } = this.props;
        const {arePlayersSelected, selectedPlayers, startGame} = this.state;
        if(_isEmpty(participatingPlayers)){
            return null;
        }

        if(startGame){
            return <BetPage 
                UpdateState={this.UpdateState} 
                OpposingBetNumber={this.state.OpposingBetNumber}
                firstList={this.state.firstList}
                lastList={this.state.lastList}
                />
        }

        return (
            <div className="modal-body row">
                {arePlayersSelected &&
                    <div>
                        Playing {selectedPlayers.length}
                        {
                            selectedPlayers.map((item, index) => 
                                <li key={index} className="list-group-item">
                                    <div key={index} className="container">
                                        <div className="row">
                                            <Card.Img src={item.Image} 
                                                style={{ 'vertical-align': 'middle', 
                                                width: '50px', 
                                                height: '50px',
                                                }}
                                                rounded
                                            />
                                            <div className="col-sm" style={{'margin-left': '10px', 
                                                'text-overflow': 'ellipsis',
                                                overflow: 'hidden',
                                                'white-space': 'nowrap',
                                                width: '80px',
                                                display: 'inline-flex'
                                            }}>
                                                {item.Name}
                                            </div>
                                            <div className="PlayerCash">
                                                <span><Icons.CashStack color="goldenrod" /> {item.Price}</span>
                                                <span><Icons.GearWide  color="goldenrod" /> {item.Bet}</span>
                                            </div>
                                            <div className="PlayerTropy">
                                                <span><Icons.TrophyFill color="yellowgreen"/>{item.Wins}</span>                                                
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                        <button type="button" className="btn btn-primary" onClick={()=>this.UpdateState({startGame: true})}>START</button>
                    </div>
                }
                <div className="players-list-from-data" style={{'margin-left': '25px'}}>
                    Select Playing 9
                    <ul className="list-group">
                        <li className="list-group-item" style={{width: '900px', 'text-align': 'center'}}> 
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm"> SELECT </div>
                                    <div className="col-sm"> PLAYER NAME </div>
                                    <div className="col-sm"> AVATAR </div>
                                    <div className="col-sm"> LEVEL </div>
                                    <div className="col-sm"> BET </div>
                                    <div className="col-sm"> WINS </div>
                                    <div className="col-sm"> LOST </div>
                                    <div className="col-sm"> PRICE </div>
                                </div>
                            </div>
                        </li>
                        { 
                            participatingPlayers.map((item, index) => 
                            <li key={index} className="list-group-item" style={{width: '900px', 'text-align': 'center'}}> 
                                <div key={index} className="container">
                                    <div className="row">
                                        <div className="col-sm">
                                            <input type="checkbox" onClick={(event) => this.selectPlayer(item, event)} />
                                        </div>
                                        <div className="col-sm">
                                            {item.Name}
                                        </div>
                                        <div className="col-sm">
                                            <Card.Img src={item.Image} 
                                                style={{ 'vertical-align': 'middle', 
                                                width: '50px', 
                                                height: '50px',
                                                }}
                                                rounded
                                            />
                                        </div>
                                        <div className="col-sm">
                                            {item.Level}
                                        </div>
                                        <div className="col-sm">
                                            {item.Bet}
                                        </div>
                                        <div className="col-sm">
                                            {item.Wins}
                                        </div>
                                        <div className="col-sm">
                                            {item.Loss}
                                        </div>
                                        <div className="col-sm">
                                            {item.Price}
                                        </div>
                                    </div>
                                </div>
                            </li>                       
                            )                         
                        }
                    </ul>
                </div>                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { ParticipantStore={} } = state;
    const {participatingPlayers} = ParticipantStore;
    return {
        participatingPlayers
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        storeUsersData : (data) => dispatch(UsersAction(data)),

        selectedPlayerForBet: (data) => dispatch(selectedPlayerForBet(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);