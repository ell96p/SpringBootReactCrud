import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";

const AppNavbar=()=>{
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/recipes">Recipes</Nav.Link>
                <Nav.Link href="/clicker">Clicker</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    );
}
export default AppNavbar;