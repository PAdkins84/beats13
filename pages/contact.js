import Layout from '../components/Layout';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/pro-solid-svg-icons'


const ContactPage = () => {
    return (
            <Layout>
                <section className="mb-5 contactStyle">

<h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
<p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
    a matter of hours to help you.</p>

<div className="row">

    <div className="col-md-9 mb-md-0 mb-5">
    <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
           <input type="hidden" name="bot-field" />
           <input type="hidden" name="form-name" value="contact" />

    
            <div className="row">


                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input type="text" id="name" name="name" className="form-control"/>
                        <label htmlFor="name" className="">Your name</label>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input type="text" id="email" name="email" className="form-control"/>
                        <label htmlFor="email" className="">Your email</label>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="md-form mb-0">
                        <input type="text" id="subject" name="subject" className="form-control"/>
                        <label htmlFor="subject" className="">Subject</label>
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col-md-12">

                    <div className="md-form">
                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                        <label htmlFor="message">Your message</label>
                    </div>

                </div>
            </div>

            <div className="row">

                <div className="col-md-12 field">

                    <div data-netlify-recaptcha="true" className="md-form"></div>

                </div>
            </div>
            <div className="text-center text-md-left">
                <button className="btn btn-outline-light" type="submit">Send</button>
            </div>
        </form>
    </div>
    <div className="col-md-3 text-center">
        <ul className="list-unstyled mb-0">
            <li><FontAwesomeIcon icon={faMapMarkerAlt} size="3x"/>
                <p>Birmingham, UK</p>
            </li>

            {/* <li><FontAwesomeIcon icon={faPhone} size="3x"/>
                <p>07926619158</p>
            </li> */}

            <li><FontAwesomeIcon icon={faEnvelope} size="3x"/>
                <p>contact@beats13.store</p>
            </li>
        </ul>
    </div>
</div>

</section>
            </Layout>
    )
}

export default ContactPage