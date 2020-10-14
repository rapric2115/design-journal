import Head from 'next/head';

import LogSubs from '../components/LogSubs';
import SubNavbar from '../components/subNavbar';
import Style from '../styles/Testing.module.css'; 
import Footer from '../components/footer';


const Layout = (props) => (
    <div>
        <Head>
            <title>The Design Journal | Designiumpartner</title>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossOrigin="anonymous"></script>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" 
                        crossOrigin="anonymous" />
        </Head>
        <main className="container mt3">
        <LogSubs />
        <h1 className={Style.title}>The Design Journal</h1>
        <SubNavbar />
        <hr />
       
        {props.children}

        <Footer />
        </main>
    </div>
);

export default Layout;