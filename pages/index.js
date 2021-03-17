import Layout from '../components/Layout';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => {
    return (
        <Layout>
            <h1 className="mt-5" style={{display: 'flex', justifyContent: 'center'}}>Welcome to the home of Beats13!</h1>
            <h2 className="mt-5" style={{display: 'flex', justifyContent: 'center'}}><Link href="/store">Browse my beats here.</Link></h2>
            {/* <Link href="/merch">Merch</Link> */}
        </Layout>
    )
}

export default IndexPage