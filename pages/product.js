import Layout from '../components/Layout';
import { withRouter } from 'next/router';
import client from '../components/ApolloClient';
import gql from 'graphql-tag';

const Product = withRouter(props => {
    const { product } = props;

    return(
        <Layout>
            { product ? (
                <div className="cardStyle bg-light mb-3 p-5">
                    <div className="card-body">
                        <h4 class="card-title">{product.name}</h4>
                        <img style={{height: '300px', width: '400px', display: 'block'}} src={product.image.sourceUrl} alt={product.image.alt} />
                        <p className="card-text" dangerouslySetInnerHTML={{ __html: product.description }} />
                    </div>
                </div>
            ) : '' }
        </Layout>
    )
});

Product.getInitialProps = async function( context ) {
    let { query: { slug } } = context;
    const id = slug ? parseInt( slug.split('-').pop() ) : context.query.id;

    const PRODUCT_QUERY = gql` query Product( $id: ID ! ) {
        product( id: $id, idType: DATABASE_ID) {
            id
            name
            databaseId
            slug
            description
            image {
                altText
                id
                sourceUrl
                srcSet
                uri
                title
                }
        }
    }`;

    const res = await client.query(({
        query: PRODUCT_QUERY,
        variables: { id }
    }));

    return {
        product: res.data.product
    }
}

export default Product;
