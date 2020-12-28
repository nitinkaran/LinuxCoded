import React from 'react';
import ComponentA from './ComponentA';

export const CommerceContext = React.createContext();
export const ScienceContext = React.createContext();

function UsageOfUseContext() {
    const objectProps = [
        {
            name: 'Shiv',
            title: '',
            postGrad: 'NITK',
            science: "science background"
        },
        {
            name: 'Mahesh',
            title: '',
            postGrad: 'IITK',
            science: "science background"
        },
        {
            name: 'Shankar',
            title: '',
            postGrad: 'AIIMS',
            science: "science background"
        }
    ]
    return (
        <div>
            <br />
            <CommerceContext.Provider value={objectProps}>
                <ScienceContext.Provider value={"ScienceContext sent as props"}>
                    <ComponentA />
                </ScienceContext.Provider>
            </CommerceContext.Provider>
        </div>
    );
}

export default UsageOfUseContext;