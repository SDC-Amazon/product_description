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
    },
    {
        option: '4-pack',
        price: 20.99
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
            //value: 'Hi',
            item: dummydata,
            id: 1,
            //option_num: 0,
            option_text:''
        }
        this.selectChange = this.selectChange.bind(this);
    }

    componentDidMount() {
        //document.productID = 1
        
        window.addEventListener('updateProduct', (event) => {
            this.setState({
                id: event.detail,
            })
        }, false)
        this.getItem()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.id !== prevState.id) {
            this.getItem();
        }
    }

    selectChange(event) {
        this.setState({option_text: event.target.value})
    }

    
    getItem() {
        axios.get('http://ec2-18-216-249-173.us-east-2.compute.amazonaws.com/prodDesc', {params: {id: this.state.id}} )
        .then((response)=> {
            this.setState({item:response.data[0]})
        })
        .catch(((error)=> {
            console.log(error)
        }))
    }

    render() {
        return ( 
            <div className='app_stuff'>
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