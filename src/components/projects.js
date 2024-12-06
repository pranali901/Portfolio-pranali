import { Container, Row, Col, TabContainer, Tab } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

export const Projects=()=>{
    const projects = [
        {
            title: "virtual Assistant",
            description: "design and developement",
            imgUrl: "#",
        },
        {
            title: "dental clinic",
            description: "design and developement",
            imgUrl: "#",
        },
        {
            title: "railway reservation",
            description: "design and developement",
            imgUrl:  "#",
        },

    ];
    return (

        <section className="project" id="projects">
            <Container className="">
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p> A third-year IT diploma student at Government Polytechnic Mumbai. With a strong foundation in programming and a knack for problem-solving, I’ve explored various technologies, including creating a virtual voice assistant</p>
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
                                    title={projects[0].title} 
                                    description={projects[0].description}
                                    imgUrl={projects[0].imgUrl} /> 
                                    </Col> 
                                    </Row>
  

                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                <Row>
                                <Col className="d-flex justify-content-center align-items-center">
                                <ProjectCard
                                    title={projects[1].title} 
                                    description={projects[1].description}
                                    imgUrl={projects[1].imgUrl} /> 
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