import { useState } from 'react';
import '../style/subcontent.css';
import { Button, Carousel } from 'react-bootstrap';

function SubContent() {

    const [like, setLike] = useState(0);

    return (
        <div className="sub-container">
            <div className="top-container">
                <div className="image-top">
                    {/* <img src="/img/Home-Page_0003s_0001s_0004_pool-(23).png" alt="img2" /> */}
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/img/Home-Page_0003s_0001s_0004_pool-(23).png"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/img/Home-Page_0003s_0001s_0004_pool-(23).png"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/img/Home-Page_0003s_0001s_0004_pool-(23).png"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="content-top">
                    <div className="content">
                        <h2>Beach Paradise</h2>
                        <span>Lorem ipsum dolor sit amet consectetur </span>
                    </div>
                    <div className="btn">
                        <Button
                            variant="outline-primary"
                            onClick={() => setLike(like + 1)}
                        >
                            {like} Likes
                        </Button>
                    </div>
                </div>
            </div>
            <div className="bottom-container">
                <div className="content-bottom">
                    <div className="content">
                        <h2>Beach Paradise</h2>
                        <span>Lorem ipsum dolor sit amet consectetur </span>
                    </div>
                    <div className="btn">
                        <Button
                            variant="outline-primary"
                        >
                            Read More
                        </Button>
                    </div>
                </div>
                <div className="image-bottom">
                    <img className= 'img3' src="/img/Home-Page_0003s_0000s_0004_DRZ_MG_3717z.png" alt="img3" />
                </div>
            </div>
        </div>
    )
}

export default SubContent
