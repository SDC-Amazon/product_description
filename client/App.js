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
            option_num: 0,
            option_text:''
        }
        this.selectChange =this.selectChange.bind(this);
    }

    componentDidMount() {
        document.productID = 1
        this.getItem()
    }

    selectChange(event) {
        //event.preventDefault();
        //console.log('Here boi')
        //console.log(event.target.value)
        this.setState({option_text: event.target.value})
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
                <ProductDescription 
                item={this.state.item} 
                change={this.selectChange} 
                option_text={this.state.option_text}
                />
                </div>
            </div>
        )
    }
};

export default App;