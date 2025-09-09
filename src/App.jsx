import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './assets/logo.png';

const App = () => {
  const [certificateNumber, setCertificateNumber] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState('success');

  const VALID_CERTIFICATE = '25080498';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!certificateNumber.trim()) {
      setValidationMessage('⚠️ Please enter a certificate number');
      setAlertVariant('warning');
      setShowAlert(true);
      return;
    }

    if (certificateNumber.trim() === VALID_CERTIFICATE) {
      setValidationMessage('✅ Certificate is valid and verified!');
      setAlertVariant('success');
    } else {
      setValidationMessage('❌ Certificate number is invalid or not found');
      setAlertVariant('danger');
    }

    setShowAlert(true);
  };

  const handleReset = () => {
    setCertificateNumber('');
    setValidationMessage('');
    setShowAlert(false);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg">
            <Card.Header className="bg-white text-center">
              {/* Company Logo */}
              <img 
                src={logo} 
                alt="Nanosoft ERP Solutions" 
                className="img-fluid mb-3" 
                style={{ maxHeight: '80px' }} 
              />
              <h3 className="mb-0 text-primary">Certificate Validator</h3>
            </Card.Header>
            <Card.Body className="p-4">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">
                    Enter Certificate Number
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={certificateNumber}
                    onChange={(e) => setCertificateNumber(e.target.value)}
                    className="form-control-lg"
                  />
                  <Form.Text className="text-muted">
                    Enter the certificate number to validate
                  </Form.Text>
                </Form.Group>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <Button 
                    variant="outline-secondary" 
                    onClick={handleReset}
                    className="me-md-2"
                  >
                    Reset
                  </Button>
                  <Button 
                    variant="primary" 
                    type="submit"
                    className="px-4"
                  >
                    Validate Certificate
                  </Button>
                </div>
              </Form>

              {showAlert && (
                <Alert 
                  variant={alertVariant} 
                  className="mt-4 text-center"
                  dismissible
                  onClose={() => setShowAlert(false)}
                >
                  <h5 className="mb-2">Validation Result</h5>
                  <p className="mb-1 fs-6">{validationMessage}</p>
                  <hr />
                  <p className="fw-bold mb-0">
                    Name : Tanisha Nitin Waichal <br />
                    Technology : Full Stack Web Development using React
                  </p>
                </Alert>
              )}

              <hr className="my-4" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
