import React, { Component } from 'react';
import axios from 'axios';
import _isEmpty from 'lodash/isEmpty';

import GenericItem from './GenericItem';
import SearchCandidate from './SearchCandidate';
import history from '../history';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            candidateList : {},
            shortList: [],
            showShortListButton: false,
            showRejectListButton: false,
            goToShortList: false,
            goToRejectList: false,
            rejectList: [],
            searchedCandidateList: {},
            searchedCandidate: ''
        }
        
        this.updateShortList = this.updateShortList.bind(this);
        this.updateRejectList = this.updateRejectList.bind(this);
        this.updateState = this.updateState.bind(this);
        this.goToShortListPage = this.goToShortListPage.bind(this);
        this.goToRejectListPage = this.goToRejectListPage.bind(this);
    }

    componentDidMount(){
        this.callRest = axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
        .then(response => {
            const data = response.data;
            this.setState({
                candidateList: data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    componentDidUpdate() {
        const {searchedCandidate, candidateList} = this.state;
        if(!_isEmpty(searchedCandidate)) {
            const data = candidateList.filter(item => item.name.toLowerCase().includes(searchedCandidate));
            this.setState({
                searchedCandidate: '',
                searchedCandidateList: data
            })
        }
    }

    updateState(options) {
        this.setState({
            ...options
        });
    }

    updateShortList(list){
        var shortList = this.state.shortList;
        shortList.push(list);
        this.setState({
            shortList,
            showShortListButton: true
        });
    }

    updateRejectList(list){
        var rejectList = this.state.rejectList;
        rejectList.push(list);
        this.setState({
            rejectList,
            showRejectListButton: true
        });
    }

    goToShortListPage(){
        history.push('/selected-list');
        this.setState({
            showShortListButton: false,
            goToShortList: true
        });
    }

    goToRejectListPage() {
        history.push('/rejected-list');
        this.setState({
            showRejectListButton: false,
            goToRejectList: true
        });
    }

    renderAllCandidates() {
        const { candidateList, shortList, rejectList, showShortListButton,
            showRejectListButton, goToShortList, goToRejectList } = this.state;        
        const candidateListProps = {
            candidateList,
            shortList,
            rejectList,
            goToShortList,
            goToRejectList,
            updateState: this.updateState,
            updateRejectList: this.updateRejectList,
            updateShortList: this.updateShortList
        }
        return (
            <div className="makeStyles-grow-1">
                <SearchCandidate searchProps={this.updateState} />
                {showShortListButton && 
                    <button onClick={this.goToShortListPage}>Selected Candidates</button>
                }
                {showRejectListButton &&
                    <button onClick={this.goToRejectListPage}>Rejected Candidates</button>
                }
                <GenericItem candidateListProps={candidateListProps} />
            </div>
        );
    }

    renderSearchedCandidates() {
        const { searchedCandidateList, showShortListButton, goToShortList, shortList,
            showRejectListButton, rejectList, goToRejectList } = this.state; 
        const candidateListProps = {
            goToShortList,
            shortList,
            goToRejectList,
            rejectList,
            candidateList: searchedCandidateList,
            updateRejectList: this.updateRejectList,
            updateShortList: this.updateShortList
        }
        return (
            <div className="makeStyles-grow-1">
                <SearchCandidate searchProps={this.updateState} />
                {showShortListButton && 
                    <button onClick={this.goToShortListPage}>Selected Candidates</button>
                }
                {showRejectListButton &&
                    <button onClick={this.goToRejectListPage}>Rejected Candidates</button>
                }
                <GenericItem candidateListProps={candidateListProps}/>
            </div>
        );
    }

    render() {
        const { candidateList, searchedCandidateList} = this.state;        

        if(_isEmpty(candidateList) && _isEmpty(searchedCandidateList)){
            return null;
        }else if(!_isEmpty(searchedCandidateList)){ 
            return this.renderSearchedCandidates();
        }else {
            return this.renderAllCandidates();
        }
        
    }
}

export default Home;