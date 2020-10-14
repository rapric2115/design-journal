import React, { Component } from 'react';
import TextList from '../content-api/test-list';
import { Card, Button } from 'antd';
import Style from '../styles/Content.module.css';
import Link from 'next/link';
import Ads from '../components/ads';
import GAds from '../components/googleAds';


class Content extends Component {
    render() {
        const { Meta } = Card;
        return(
            
            <main>
                <div className="row">
                <div className="col-md-8">
                    <GAds />
                    <div className={Style.displayif}>
                    {TextList.map((e, i) => (
                            <Card 
                            className={Style.cardMargin}
                            key={e.pid}
                            hoverable
                            style={{ width: 240, margin: '1rem auto 0', padding: '.5rem' }}
                            cover={<img alt="example" src={e.imageUrl1} />}
                          >
                            <Meta title={e.title} className="mb4" />
                            <Link href={`/post/${e.pid}`} className="m4">
                                <Button className="m-2">Vamos a Leerlo</Button>
                            </Link>
                          </Card>
                    ))}
                    </div>
                </div>
                <div className="col-md-2">
                    Design Info Here
                </div>
                <div className="col-md-2">
                    <Ads />
                </div>
                </div>
            </main>
           
        )
    }
}

export default Content;