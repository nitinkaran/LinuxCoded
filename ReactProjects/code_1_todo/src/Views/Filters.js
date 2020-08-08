import React from 'react';
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

export default Filters;