import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Column from './src/Column'
import Slack from './src/Slack';
import NavBar from './src/NavBar';
function App() {

  const [show, setShow] = useState(true);

  return (
    <div className="App">
     
<Stack direction="horizontal" gap={2}>

  <Button as="a" variant="success">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
</Stack>
      <h1>
        Example heading
        <Badge bg="primary" as={Button}>
          New
        </Badge>
      </h1>

      <div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Oh snap! You got an error!</strong>
      <p>Change this and that and try again.</p>
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
      
      <Alert dismissible variant="">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>Change this and that and try again.</p>
    </Alert>

    <Alert show={show} variant="success">
        <Alert.Heading>My Alert</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
        
      </Alert>
      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      <style type="text/css">
        {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
      </style>
      <div>
      <Button variant="flat" size="xxl">
        Flat Button
      </Button>

      <Button variant="flat" size="x">
        Flat Button 2
      </Button>
    </div>

    <Stack direction="horizontal" gap={3}>
      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        title="Light dropdown"
        className="mt-2"
        data-bs-theme="light"
      >
        <Dropdown.Item href="#/action-1" active={true}>
          Action
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        title="Dark dropdown"
        className="mt-2"
        data-bs-theme="dark"
      >
        <Dropdown.Item href="#/action-1" active>
          Action
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
      </DropdownButton>
<div>

      {/* <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="lg"
>
  <div>Your app...</div>
</ThemeProvider> */}
</div>


    </Stack>

    <div>
</div>
    <Column />
     <Slack />
     <NavBar />
    </div>
  );
}

export default App;
