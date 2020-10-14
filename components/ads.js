import React, { Component } from 'react';
import { Card, Avatar } from 'antd';
import GAds from '../components/googleAds';
import Link from 'next/link';

const { Meta } = Card;

class Ads extends Component {
    render() {
        return(
            <main>
                <GAds />
                <Link href="https://website.cc.lerjin.com/i/1995362329">
                <Card style={{ width: 300, marginTop: 16 }}>
                <Meta
                    avatar={
                    <Avatar src="/images/clipclaps.png" />
                    }
                    title="A Ganar Dinero!!"
                    description="Gana Dinero viendo videos cortos."
                />
                </Card>
                </Link>
                <Link href="https://givvy-share.app.link/kPljCVk7f9">
                <Card style={{ width: 300, marginTop: 16 }}>
                <Meta
                    avatar={
                    <Avatar src="/images/givvy.png" />
                    }
                    title="A Ganar Dinero!!"
                    description="Gana Dinero jugando 0 y X."
                />
                </Card>
                </Link>

                <div className="card bg-dark text-white m-4">
                    <Link href="https://freebitco.in/?r=1239559">
                        <img src="/images/bitcoin-banner.png" className="card-img" alt="freebitcoin banner publicidatario" />
                    </Link>
                </div>

                <div className="card bg-dark text-white">
                <img src="..." className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text">Last updated 3 mins ago</p>
                </div>
                </div>
            </main>
        )
    }
}

export default Ads