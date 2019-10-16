import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Hi'
        }
    }

    componentDidMount() {
        console.log('Hello');
        axios.get('/cats')
            .then((response)=> {
                console.log(response.data);
            })
            .catch(((error)=> {
                console.log(error)
            }))
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