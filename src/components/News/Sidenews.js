import React from 'react';
import SingleSideNews from './SingleSideNews'
import axios from 'axios';

class Sidenews extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            sidenews:[]
        }
    }

    componentDidMount(){
        const url=`http://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=7096fbd5475746d586a5e4876265c492`
    
        axios.get(url)
            .then((response) => {
                this.setState({
                    sidenews : response.data.articles
                })
            })
            .catch(error => console.log(error))
    }


    renderItems = () => {
        return this.state.sidenews.map(item => (
            <SingleSideNews key={item.url} item={item} />
        ));
    }

    render(){
        return(
            <div>
                {this.renderItems()}
            </div>
        )
    }
}
export default Sidenews;