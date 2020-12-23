import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
    render() {
        // console.log("PURE COMPONENT");
        return (
            <div>
                PURE COMP : {this.props.name}
            </div>
        );
    }
}

export default PureComp;