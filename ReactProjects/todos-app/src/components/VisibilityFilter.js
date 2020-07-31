import React from 'react';
import { VISIBILITY_FILTERS } from "../constants";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";

const VisibilityFilter = ({setFilter, currentFilter}) => {
    return (
        <div className="visibility-filters">
            {
                Object.keys(VISIBILITY_FILTERS).map(filter => {
                    const visibleFilter = VISIBILITY_FILTERS[filter];
                    const isActive = (currentFilter === visibleFilter) ? '-active' : '';
                    return (
                        <span 
                            className={`filtered-values${isActive}`} 
                            key={visibleFilter} 
                            onClick={() => {setFilter(visibleFilter);}}
                        >
                            {visibleFilter}
                        </span>
                    );
                })
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    const { visibilityFilter: currentFilter } = state;
    return {
        currentFilter
    }
};

export default connect(
    mapStateToProps,
    {setFilter}
)(VisibilityFilter);