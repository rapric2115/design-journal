import React, { Component } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';



class Contratar extends Component {
    render() {
        return(
            <Layout>
                <Head>
                    <title>Contratar | Designiumpartner</title>
                </Head>
                <main>
                    <h1>Contratar</h1>
                    <p>Todos Nuestros websites estan codificados con <Link href="#">Angular js </Link> 
                    framework desarrollado por Google o <Link href="reactjs.org">React js </Link> 
                    framework desarrollado por Facebook, HTML 5, CSS3 y Typescript. Para base de datos 
                    utilizamos <Link href="">Firebase </Link> desarrollado tambien por Google.</p>
                    <p>a continuación le detallaremos el proceso de Diseño y Codificación que tomamos 
                        en cuenta para nuestros proyectos.
                    </p>
                    <div className="text-center">
                    <Timeline mode="alternate">
                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
                        <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo.
                        </Timeline.Item>
                        <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                        Technical testing 2015-09-01
                        </Timeline.Item>
                    </Timeline>
                    </div>
                    
                </main>
            </Layout>
        )
    }
}

export default Contratar;