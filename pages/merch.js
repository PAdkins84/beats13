import Layout from '../components/Layout';
import client from '../components/ApolloClient';
import Products from '../components/Products';
import gql from 'graphql-tag';

const PRODUCTS_QUERY = gql`query{
      products(first:20) {
        nodes {
          id
          name
          averageRating
          databaseId
          slug
          description
          image {
            uri
            title
            srcSet
            sourceUrl
          }
          ... on VariableProduct {
              id
              name
              price
          }
        }
      }
}`;

const Merch = ( props ) => {
  console.log(props)

  const { products } = props;

  return (
      <Layout>
        <div className="container cardStyle">
          <div className="row">
          { products.length ? (
              products.map( product => <Products key={product.id} product={ product } />)
          ) : ''}
          </div>
        </div>
      </Layout>
  )
};

Merch.getInitialProps = async () => {
    const result = await client.query({query: PRODUCTS_QUERY});

    return {
      products: result.data.products.nodes
    }
};

export default Merch;