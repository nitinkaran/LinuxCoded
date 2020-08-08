import React from 'react';
import { filter } from "../Redux/Actions";
import { connect } from "react-redux";
import { VISIBILITY_FILTER } from "../VisibilityFilter";

const matchFilter = (visibilityFilter, item) => {
    return (VISIBILITY_FILTER[item] === visibilityFilter) ? '-underline' : '';
};

const Filters = ({visibilityFilter, filter}) => {
    return (
        <div className="visibilityFilters">
            {
                Object.keys(VISIBILITY_FILTER).map(item => {
                    const isActive = matchFilter(visibilityFilter, item);
                    const displayedFilters = VISIBILITY_FILTER[item];
                    return (
                        <span
                            className={`visible-filters${isActive}`}
                            onClick={() => {filter(displayedFilters);}}
                        >
                            {displayedFilters}
                        </span>
                    );
                })
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    const { visibilityFilter } = state;
    return {
        visibilityFilter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        filter : (value) => {
            dispatch(filter(value));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);