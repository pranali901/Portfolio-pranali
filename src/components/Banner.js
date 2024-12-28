import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const toRotate = useMemo(() => ["Web Designer", "Programmer", "Developer"], []);
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    const tick = useCallback(() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }, [isDeleting, loopNum, period, text.length, toRotate]);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
    }, [tick, delta]);

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{"Hi I'm Pranali Ausarmal. "}<span className="wrap"> {text} </span></h1>
                                    <p>A third-year IT diploma student at Government Polytechnic Mumbai. With a strong foundation in programming and a knack for problem-solving, I’ve explored various technologies, including creating a virtual voice assistant in Python. Dive into my portfolio to explore my projects, skills, and achievements. Let’s build the future together!</p>
                                    <button onClick={() => console.log('connect')}>
                                        <a href="/Pranali_Ausarmal-cv.pdf" download="Pranali_Ausarmal-cv.pdf" style={{ color: 'inherit', textDecoration: 'none' }}>
                                            Resume <ArrowRightCircle size={25} />
                                        </a>
                                    </button>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
