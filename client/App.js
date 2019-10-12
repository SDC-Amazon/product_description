import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Hi'
        }
    }

    render() {
        return ( 
            <div>
                <h1> Hello  AMIShON</h1>
            </div>
        )
    }
};

export default App;