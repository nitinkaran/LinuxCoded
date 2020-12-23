import React from 'react';

const withComponent = WrappedComponent => {
    class WithComponent extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                count: 0
            }
            this.hoverRef = React.createRef();
        }
    
        getFocus = () => {
            this.createRef.current.focus();
        }
    
        incrementCount = () => {        
            this.setState( (prevState) => ({
                count: prevState.count + 1
            }) );
        }

        render() {
            const { count } = this.state;

            return <WrappedComponent 
                        count={count} 
                        incrementCount={this.incrementCount} 
                        focus={this.getFocus}
                    />
        }
    }

    return WithComponent;
};

export default withComponent;