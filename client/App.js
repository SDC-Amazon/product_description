import React from 'react';
import axios from 'axios';
import ProductDescription from './ProductDescription.js'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Hi',
            item: [''],
            id: 3
        }
    }

    componentDidMount() {
        this.getItem()
    }

    getItem() {
        axios.get('/cats', {params: {id: this.state.id}} )
        .then((response)=> {
            //console.log(response.data);
            this.setState({item:response.data[0]})
        })
        .catch(((error)=> {
            console.log(error)
        }))
    }

    render() {
        return ( 
            <div>
                <h1> Hello  AMIShON</h1>
                <div>
                <ProductDescription item={this.state.item}/>
                </div>
            </div>
        )
    }
};

export default App;