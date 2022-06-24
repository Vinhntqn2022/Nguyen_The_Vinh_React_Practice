import { Container, Row, Col, Form, Button, Pagination } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { BsBoxArrowInDownLeft, FaMale, FaFemale } from 'react-icons/bs';

import './Home.css';

const Home = ({ customerData }) => {
  return (
    <Container>
      <Row>
        <Col>Card view</Col>
        <Col>List view</Col>
        <Col>New Costumer</Col>
        <Col>
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Filter</Form.Label>
              <Form.Control type='email' placeholder='' />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className='home__row-card'>
        {customerData?.map((customer) => (
          <Col xs={6}>
            <Card className='home__card' key={customer.id}>
              <Card.Header className='home__card-header'>
                <p>
                  {customer.firstName} {customer.lastName}
                </p>
                <BsBoxArrowInDownLeft />
              </Card.Header>
              <Card.Body>
                <Card.Text>{customer.city}</Card.Text>
                <Card.Text>{customer.state.name}</Card.Text>
                <Button variant='link'>view order</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <Pagination>
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Next />
        </Pagination>
      </Row>
    </Container>
  );
};
export default Home;
