import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import ImageLocation from './ImageLocation';

const CarouselSelection = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    width={900}
                    height={700}
                    className="d-block w-100"
                    src={ require(`${ImageLocation.path1}`) }
                    alt=""
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    width={500}
                    height={700}
                    className="d-block w-100"
                    src={require(`${ImageLocation.path2}`)}
                    alt=""
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    width={500}
                    height={700}
                    className="d-block w-100"
                    src={require(`${ImageLocation.path3}`)}
                    alt=""
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    width={500}
                    height={700}
                    className="d-block w-100"
                    src={require(`${ImageLocation.path4}`)}
                    alt=""
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    width={500}
                    height={700}
                    className="d-block w-100"
                    src={require(`${ImageLocation.path5}`)}
                    alt=""
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    width={500}
                    height={700}
                    className="d-block w-100"
                    src={require(`${ImageLocation.path6}`)}
                    alt=""
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    width={500}
                    height={700}
                    className="d-block w-100"
                    src={require(`${ImageLocation.path7}`)}
                    alt=""
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    width={500}
                    height={700}
                    className="d-block w-100"
                    src={require(`${ImageLocation.path8}`)}
                    alt=""
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    width={500}
                    height={700}
                    className="d-block w-100"
                    src={require(`${ImageLocation.path9}`)}
                    alt=""
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    width={500}
                    height={700}
                    className="d-block w-100"
                    src={require(`${ImageLocation.path10}`)}
                    alt=""
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    width={500}
                    height={700}
                    className="d-block w-100"
                    src={require(`${ImageLocation.path11}`)}
                    alt=""
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselSelection;