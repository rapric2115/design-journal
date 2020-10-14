import React, { Component } from 'react';
import Head from 'next/head';
import Content from '../components/Content';
import Style from '../styles/Testing.module.css';
import Covid from '../components/CovidInfo';
import LogSubs from '../components/LogSubs';
//import Style from '../styles/Home.module.css';
import Layout from '../components/Layout';
import SubNavbar from '../components/subNavbar';
import Footer from '../components/footer';



class Test extends Component {
    constructor() {
        super()
        this.state = {
            author: '',
            quote: ''
        }
    }

    // componentDidMount() {
    //     const url = "https://qvoca-bestquotes-v1.p.rapidapi.com/quote"
    //     fetch(url, {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "qvoca-bestquotes-v1.p.rapidapi.com",
    //             "x-rapidapi-key": "f43c62c95dmsh880c62a47e27d56p1df237jsn4a8636802c68"
    //         }
    //     })
    //     .then(response => {
    //         const res = response.json()
    //         console.log(res);
    //         return res
    //     }).then(res => {
    //         console.log(res)
    //         this.setState({
    //             author: res.author,
    //             quote: res.message
    //         })
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // }
    
    render(){
        return(
            <div>
                <Head>
                    <meta name="description" content="esta es la descripcion" />
                </Head>
            <main className={Style.roboto}>
                <div className="row">
                    <div className="col-md-6">
                    <div className="card">
                    <div className='card-body'>
                        {this.state.quote}
                    </div>
                    <div className="text-right">
                        <i>{this.state.author}</i>
                    </div>
                </div>
                    </div>
                    <div className="col-md-6">
                        <Covid />
                    </div>
                </div>
                <Content />
                
            </main>
            </div>
        )
    }
}

export default Test