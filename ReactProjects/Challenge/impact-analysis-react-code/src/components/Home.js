import React, { Component } from 'react';
import axios from 'axios';
import _isEmpty from 'lodash/isEmpty';

import GenericItem from './GenericItem';
import SearchCandidate from './SearchCandidate';
import SelectedList from './SelectedList';
import RejectedList from './RejectedList';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            candidateList : {},
            shortList: [],
            showShortListButton: false,
            showRejectListButton: false,
            rejectList: [],
            searchedCandidateList: {},
            searchedCandidate: ''
        }
        this.updateShortList = this.updateShortList.bind(this);
        this.updateRejectList = this.updateRejectList.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    componentDidMount(){
        axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
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

    renderSelectedList() {
        return (
            <div>

            </div>
        );
    }

    render() {
        const { candidateList, searchedCandidateList, shortList, rejectList, 
            showShortListButton, showRejectListButton} = this.state;        
        const candidateListProps = {
            candidateList,
            shortList,
            rejectList,
            updateState: this.updateState,
            updateRejectList: this.updateRejectList,
            updateShortList: this.updateShortList
        }

        if(_isEmpty(candidateList) && _isEmpty(searchedCandidateList)){
            return null;
        }else if(!_isEmpty(searchedCandidateList)){ 
            const candidateListProps = {
                candidateList: searchedCandidateList,
                updateRejectList: this.updateRejectList,
                updateShortList: this.updateShortList
            }
            return (
                <div className="makeStyles-grow-1">
                    <SearchCandidate searchProps={this.updateState} />
                    {showShortListButton && <button>Selected Candidates</button>}
                    {showRejectListButton && <button>Rejected Candidates</button>}
                    <GenericItem candidateListProps={candidateListProps}/>
                </div>
            );
        }else {
            return (
                <div className="makeStyles-grow-1">
                    <SearchCandidate searchProps={this.updateState} />
                    {showShortListButton && <button>Selected Candidates</button>}
                    {showRejectListButton && <button>Rejected Candidates</button>}
                    <GenericItem candidateListProps={candidateListProps} />
                </div>
            );
        }
        
    }
}

export default Home;