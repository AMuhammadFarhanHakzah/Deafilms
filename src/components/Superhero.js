import { Card, Col, Container, Image, Row } from "react-bootstrap"
import antman from "../assets/images/superhero/antman.jpg"
import avenger from "../assets/images/superhero/avenger.jpg"
import batman from "../assets/images/superhero/batman.jpg"
import robinhood from "../assets/images/superhero/robinhood.jpg"
import spiderman from "../assets/images/superhero/spiderman-cover.jpg"
import superman from "../assets/images/superhero/superman.jpg"

const Superhero = () => {
    return (
        <div>
            <Container>
                <Row>
                    <h1 className="text-white mt-4 mb-4">SUPERHERO MOVIES</h1>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="bg-dark text-white movieImage m-1 p-2">
                            <Image src={antman} alt="Dune Movies" className="images" />
                            <Card.Title className="text-center">Card title</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage m-1 p-2">
                            <Image src={avenger} alt="Dune Movies" className="images" />
                            <Card.Title className="text-center">Card title</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage m-1 p-2">
                            <Image src={batman} alt="Dune Movies" className="images" />
                            <Card.Title className="text-center">Card title</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage m-1 p-2">
                            <Image src={robinhood} alt="Dune Movies" className="images" />
                            <Card.Title className="text-center">Card title</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage m-1 p-2">
                            <Image src={spiderman} alt="Dune Movies" className="images" />
                            <Card.Title className="text-center">Card title</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage m-1 p-2">
                            <Image src={superman} alt="Dune Movies" className="images" />
                            <Card.Title className="text-center">Card title</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Superhero