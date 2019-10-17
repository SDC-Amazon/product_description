import React from 'react';

const starArray = [1,1,.5,0,0]

class Stars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: starArray
        }

    }

    componentDidMount() {
        this.stuff()
    }

    stuff() {
        const number = Math.floor(this.props.stars)
        const decimal = this.props.stars - number;

        //console.log('number'+ number + ' ' + decimal)
        // for (var i = Math.floor(props.stars); i <= 0 ; i--) {
        //     //this.setState({this.state.stars.push(1)})
        // }
        //this.setState(stars;)
    }
    render() {
        return (
            <div>
                {this.state.stars.map (stars=> (
                    (stars === 1) 
                    ? <span class="fa fa-star checked"></span> 
                    : (stars === .5 
                        ? <span class="fa fa-star-half-empty checked"></span>
                        : <span class="fa fa-star-o checked"></span>
                    )
                ))}
            </div>
        )
    }
}

export default Stars;

//if(state = )