import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';
import { AppProvider } from './context/AppContext';

const Layout = (props) => {
    return (
        <AppProvider>
            <div className="container">
                <Head>
                    <title>Beats13</title>
                    <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                </Head>
                <Header />
                    {props.children}
                <Footer />
            </div>
        </AppProvider>
    )
}

export default Layout