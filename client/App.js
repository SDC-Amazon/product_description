import React from 'react';
import axios from 'axios';
import ProductDescription from './ProductDescription.js';
import Stars from './Stars.js';

const dummydata = {
    id: 28,
    title:  'Amish Wedding Foods - Apple Butter',
    seller: 'Amish Wedding Foods',
    stars: 4.5,
    number_ratings: 17,
    prime: true,
    options: [{
        option: '2-pack',
        price: 18.99
    }],
    description: ['Old Fashioned Apple Butter',
    'Made in Holmes County, Ohio',
    'All Natural',
    'Ingredients: Apples, Cider, Sugar, Cinnamon, and Citric Acid']
    }
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Hi',
            item: dummydata,
            id: 1,
            option: ''
        }
    }

    componentDidMount() {
        document.productID = 1
        this.getItem()
    }

    getItem() {
        axios.get('/cats', {params: {id: this.state.id}} )
        .then((response)=> {
            //console.log(response.data[0]);
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