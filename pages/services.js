import Layout from '../components/Layout'

let tempStyle = {
    height: '190px',
    width: '300px',
}

const Services = () => {
    return (
            <Layout>
                <div>
                    <h1 className="text-center mt-3">SERVICES</h1>
                </div>
                    <div className="card-group mt-5 mb-5">
                        <div className="card mr-2">
                            <img className="card-img-top mx-auto d-block" style={tempStyle} src="" alt="Custom Beats"/>
                            <div className="card-body">
                            <h5 className="card-title">Custom Beats</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button disabled className="btn btn-outline-light">Add to cart</button>
                        </div>
                        </div>
                        <div className="card mr-2">
                            <img className="card-img-top" src="" alt="Website Design"/>
                            <div className="card-body">
                            <h5 className="card-title">Website design</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <button disabled className="btn btn-outline-light">Add to cart</button>
                        </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="" alt="Promotion"/>
                            <div className="card-body">
                            <h5 className="card-title">Promotion</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <button disabled className="btn btn-outline-light">Add to cart</button>
                        </div>
                    </div>
                </div>
            </Layout>
    )
}

export default Services;