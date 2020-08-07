import React from 'react';
import { filter } from "../Redux/Actions";
import { connect } from "react-redux";
import { VISIBILITY_FILTER } from "../VisibilityFilter";

const matchFilter = (visibleFilter, item) => {
    return (VISIBILITY_FILTER[item] === visibleFilter) ? '-underline' : '';
};

const Filters = ({visibleFilter, filter}) => {
    return (
        <div className="visibilityFilters">
            {
                Object.keys(VISIBILITY_FILTER).map(item => {
                    const isActive = matchFilter(visibleFilter, item);
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
    const { visibleFilter } = state;
    return visibleFilter;
};

const mapDispatchToProps = (dispatch) => {
    return {
        filter : (value) => {
            dispatch(filter(value));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);