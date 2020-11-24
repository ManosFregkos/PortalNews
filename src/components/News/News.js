import React from 'react';
import NewSingle from './NewSingle.js';

class News extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            news:[]
        }
    }

    componentDidMount(){
        const url=`http://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=7096fbd5475746d586a5e4876265c492`
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({news:data.articles}))
            .catch(error => console.log(error))
    }


    renderItems = () => {
        return this.state.news.map(item => (
            <NewSingle key={item.url} item={item} />
        ));
    }

    render(){
        return(
            <div className="row">
                {this.renderItems()}
            </div>
        )
    }
}
export default News;