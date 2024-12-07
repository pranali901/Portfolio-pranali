import { Container, Row, Col, TabContainer, Tab } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projimg1 from "../assets/img/project-img1.png";
import projimg2 from "../assets/img/project-img2.jpg";
import projimg3 from "../assets/img/project-img3.jpg";

export const Projects=()=>{
    const projects = [
        {
            title: "Virtual Assistant in python",
            description: "Using Python and MySQL",
            imgUrl: projimg2,
        },
        {
            title: "Dental Clinic Website",
            description: "Sponsored by Dr.Tushar Patil(BDMS) Using PHP, Bootstrap, js and MySQL",
            imgUrl: projimg1 ,
        },
        {
            title: "Railway Reservation",
            description: "Small project with C#",
            imgUrl:  projimg3,
        },

    ];
    return (

        <section className="project" id="projects">
            <Container className="">
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p> A showcase of my web development projects highlighting my skills in designing, coding, and creating functional websites and applications.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab Three 
                                </Nav.Link>
                            </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                <Row>
                                    <Col className="d-flex justify-content-center align-items-center">
                                    <ProjectCard
                                    title={projects[1].title} 
                                    description={projects[1].description}
                                    imgUrl={projects[1].imgUrl} /> 
                                    </Col> 
                                    </Row>
  

                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                <Row>
                                <Col className="d-flex justify-content-center align-items-center">
                                <ProjectCard
                                    title={projects[0].title} 
                                    description={projects[0].description}
                                    imgUrl={projects[0].imgUrl} /> 
                                    </Col> 
                                    </Row>

                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                <Row>
                                <Col className="d-flex justify-content-center align-items-center">
                                <ProjectCard
                                    title={projects[2].title} 
                                    description={projects[2].description}
                                    imgUrl={projects[2].imgUrl} /> 
                                    </Col> 
                                    </Row>
   

                                </Tab.Pane>
                            </Tab.Content>
                            </Tab.Container>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}