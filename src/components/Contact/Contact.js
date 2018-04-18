import React, {Component} from 'react';
import './Contact.css';
import modalLogo from "../../assets/logo/contact-form-logo.svg";

class Contact extends Component {
    render() {
        return (
            <div>
            <div id="contact">
  <div className="text-center">
  <div className="row">
  <h3>Want to get a project done together?</h3>
  </div>
    
    <button id="email-button" style={{marginTop: '10px'}} data-toggle="modal" data-target="#exampleModalLong" className="btn btn-default btn-lg">Send me a message
    </button>
  </div>

</div>
<hr/>
<div className="modal fade modal-fullscreen" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle"
  aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-body">
        <div className="row">
          <div className="col-md-12 text-center ">
            <img src={modalLogo} className="logo-contact-form" alt="logo"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 id='modal-message'>Few questions about yourself</h2>
          </div>
        </div>
        <div className="input-container">
          <div className="row" style={{marginTop: '10px'}}>
            <div className="col-md-6">
              <input type="text" placeholder="Name*" name="name" className="form-control input-contact-form" />
            </div>
            <div className="col-md-6">
              <input type="email" placeholder="Email address*" name="email" className="form-control input-contact-form" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <input type="text" placeholder="Phone number" name="phoneNumber" className="form-control input-contact-form" />
            </div>
            <div className="col-md-6">
              <input type="text" placeholder="Website/Company" name="website" className="form-control input-contact-form" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <textarea className="form-control textarea-contact-form" name="projectInfo"  placeholder="Tell me about your project, what is it? How can I help?*"
                rows="3" required></textarea>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <button type="submit" className="btn btn-default btn-lg send-email-button">Submit your project
          </button>
          <br/>
          <small id='modal-message' style={{fontWeight: 'bold'}}>* Required</small>
        </div>
        <p className="close-modal-button">
          <i className="fa fa-times" aria-hidden="true" style={{fontSize: '35px', cursor: 'pointer'}} data-dismiss="modal"></i>
        </p>
      </div>
    </div>
  </div>
</div>
</div>
        )
    }
}

export default Contact;