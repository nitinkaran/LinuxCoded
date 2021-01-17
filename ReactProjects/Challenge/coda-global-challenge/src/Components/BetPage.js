import React, { Component } from 'react';
import {connect} from 'react-redux';
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import * as Icons from 'react-bootstrap-icons';

import {playedTheBet} from '../ReduxStore/ModifyData/ParticipantAction';

class BetPage extends Component {    

    constructor(props){
        super(props);       
        this.getPlayersListInRows = this.getPlayersListInRows.bind(this);
        this.playWithOtherPlayers = this.playWithOtherPlayers.bind(this); 
    }

    componentDidMount(){
        const {UpdateState, SelectedPlayersForBet} = this.props;
        const firstList=[], lastList = [];
        let randNum = Math.floor(Math.random() * (9 - 1) + 1);

        for(let i in SelectedPlayersForBet){

            if(parseInt(SelectedPlayersForBet[i].Bet) === randNum) {
                SelectedPlayersForBet[i].Wins =  parseInt(SelectedPlayersForBet[i].Wins)+1;
                SelectedPlayersForBet[i].Price = parseInt(SelectedPlayersForBet[i].Price) * 2 ;
                SelectedPlayersForBet[i].Level = parseInt(SelectedPlayersForBet[i].Level) + 1;
                SelectedPlayersForBet[i].Fate = 'WINNER';
            }else {
                SelectedPlayersForBet[i].Loss = parseInt(SelectedPlayersForBet[i].Loss) + 1;
                SelectedPlayersForBet[i].Fate = 'LOSE';
            }

            if(i<5){
                firstList.push(SelectedPlayersForBet[i]);
            }else {
                lastList.push(SelectedPlayersForBet[i]);
            }
        }
        this.props.UpdatePlayedTheBet(SelectedPlayersForBet);
        UpdateState({OpposingBetNumber: randNum, selectedPlayers: SelectedPlayersForBet, firstList, lastList});
    }

    playWithOtherPlayers(){
        const {UpdateState} = this.props;
        this.props.UpdatePlayedTheBet([]);
        UpdateState({
            startGame: false, 
            arePlayersSelected: false, 
            selectedPlayers : [],
            firstList: [],
            lastList: []
        })
    }

    getPlayersListInRows(){
        const {SelectedPlayersForBet} = this.props;
        const firstList = [];
        const lastList = [];
        for(var i in SelectedPlayersForBet) {
            if(i<5){
                firstList.push(SelectedPlayersForBet[i]);
            }else {
                lastList.push(SelectedPlayersForBet[i]);
            }
        }
        this.setState({firstList, lastList});
    }

    render() {
        const {OpposingBetNumber, firstList, lastList} = this.props;    
        
        return (
            <div className="betPage" style={{backgroundColor: 'aqua'}} >
                <CardColumns style={{margin: '20px', 'column-count': '5'}}>
                    {
                        firstList.map((item, index) => 
                            <Card key={index} style={{ height: '12rem', width: '12rem', 'border-radius': '0.5rem' }}>                                
                                <Card.Body>
                                    <div className="customImage"> 
                                        <Card.Img src={item.Image} 
                                            style={{ 'vertical-align': 'middle', 
                                            width: '50px', 
                                            height: '50px',
                                            }}
                                            rounded
                                        />
                                        <span className="PlayerName" 
                                            style={{'margin-left': '10px', 
                                            'text-overflow': 'ellipsis',
                                            overflow: 'hidden',
                                            'white-space': 'nowrap',
                                            width: '80px',
                                            display: 'inline-flex'
                                        }}
                                            >{item.Name}</span>
                                    </div>
                                    <div className="PlayerCash" style={{'margin-top': '10px'}}>
                                        <span><Icons.CashStack color="goldenrod" /> {item.Price}</span>
                                        <span style={{margin: '40px'}}><Icons.GearWide  color="goldenrod" /> {item.Bet}</span>
                                    </div>
                                    <div className="PlayerTropy" style={{'margin-top': '10px'}}>
                                        <span><Icons.TrophyFill color="yellowgreen" style={{'margin-right': '20px'}}/>{item.Wins}</span>
                                        <span className="PlayerLevel"  style={{margin: '40px'}}>Level {item.Level}</span>
                                    </div>
                                </Card.Body>
                                <Button variant={`${item.Fate === 'LOSE' ? "danger" : "success"}`} size="sm" block>{item.Fate}</Button>
                            </Card>
                        )
                    }
                </CardColumns>
                <div className="customButton" 
                    style={{
                        height: '130px',
                        'line-height': '130px',  
                        width: '130px',
                        'font-size': '5em',
                        'font-weight': 'bold',
                        'border-radius': '50%',
                        'background-color': '#4CAF50',
                        color: 'white',
                        'text-align': '-webkit-center',
                        cursor: 'pointer',
                        display:'block',
                        border: '2px solid #f5f5f5',
                        'text-decoration':'none',
                        background: '#555777',
                        'box-shadow': '0 0 3px gray',
                        position: 'relative',
                        left: '50%'
                    }}
                >{OpposingBetNumber}</div>
                <CardColumns style={{margin: '20px', 'column-count': '4'}}>
                    {
                        lastList.map((item, index) => 
                            <Card key={index} style={{ height: '12rem', width: '12rem', 'border-radius': '0.5rem' }}>                                
                                <Card.Body>
                                    <div className="customImage"> 
                                        <Card.Img src={item.Image} 
                                            style={{ 'vertical-align': 'middle', 
                                            width: '50px', 
                                            height: '50px',
                                            }}
                                            rounded
                                        />
                                        <span className="PlayerName" 
                                            style={{'margin-left': '10px', 
                                            'text-overflow': 'ellipsis',
                                            overflow: 'hidden',
                                            'white-space': 'nowrap',
                                            width: '80px',
                                            display: 'inline-flex'
                                        }}
                                            >{item.Name}</span>
                                    </div>
                                    <div className="PlayerCash" style={{'margin-top': '10px'}}>
                                        <span><Icons.CashStack color="goldenrod" /> {item.Price}</span>
                                        <span style={{margin: '40px'}}><Icons.GearWide  color="goldenrod" /> {item.Bet}</span>
                                    </div>
                                    <div className="PlayerTropy" style={{'margin-top': '10px'}}>
                                        <span><Icons.TrophyFill color="yellowgreen" style={{'margin-right': '20px'}}/>{item.Wins}</span>
                                        <span className="PlayerLevel"  style={{margin: '40px'}}>Level {item.Level}</span>
                                    </div>
                                </Card.Body>
                                <Button variant={`${item.Fate === 'LOSE' ? "danger" : "success"}`} size="sm" block>{item.Fate}</Button>
                            </Card>
                        )
                    }
                </CardColumns>
                <button type="button" className="btn btn-primary" onClick={this.playWithOtherPlayers}>BACK</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {Players = {}} = state;
    const {SelectedPlayersForBet} = Players;
    return {
        SelectedPlayersForBet
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        UpdatePlayedTheBet: (data) => dispatch(playedTheBet(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BetPage);