import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');

    try {
      let response = await fetch('/.netlify/functions/send-email', {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });

      let result = await response.json();

      if (result.code === 200) {
        setStatus({ success: true, message: "Message Sent Successfully" });
      } else {
        setStatus({ success: false, message: "Something Went Wrong" });
      }
    } catch (error) {
      setStatus({ success: false, message: "Something Went Wrong" });
      console.error("Error:", error);
    }

    setButtonText("Sent :)");
    setFormDetails(formInitialDetails);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="contact us" />
          </Col>
          <Col md={6}>
            <h2>Get in Touch</h2>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="email" value={formDetails.email} placeholder="Email Id" onChange={(e) => onFormUpdate('email', e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                  <textarea row="6" value={formDetails.message} placeholder="Write your Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                  <button type='submit'><span>{buttonText}</span></button>
                </Col>
                {
                  status.message &&
                  <Col>
                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                  </Col>
                }
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
