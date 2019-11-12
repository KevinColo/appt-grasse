import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Img1 from '../assets/img/ville/ColonnaGrasse-25-min.jpg';
import * as Ville1 from '../assets/img/appart/2.jpg';
import images from "./picturesApart";

import '../assets/styles/home.scss';
import MyCarousel from './myCarousel';


class Home extends React.Component {
    render() {
        return (
        <>
            <section className="site-hero overlay home-banner" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row align-items-center site-hero-inner justify-content-center">
                        <div className="col-md-12 text-center">
                            <div className="mb-5 element-animate">
                                <h1>Bienvenus dans la capitale du parfum</h1>
                                <p><a href="#" className="btn btn-outline-light">Réserver</a></p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="site-section bg-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <div className="heading-wrap text-center element-animate">
                                <h4 className="sub-heading">Stay with our luxury rooms</h4>
                                <h2 className="heading">Stay and Enjoy</h2>
                                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus illo
                                    similique natus, a recusandae? Dolorum, unde a quibusdam est? Corporis deleniti
                                    obcaecati quibusdam inventore fuga eveniet! Qui delectus tempore amet!</p>
                                <p><a href="#" className="btn btn-primary btn-sm">More About Us</a></p>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-7">
                            <img src={Img1} alt="Image placeholder" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="site-section bg-light">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-12 heading-wrap text-center">
                            <h4 className="sub-heading">Our Luxury Rooms</h4>
                            <h2 className="heading">Featured Rooms</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="media d-block room mb-0">
                                <figure>
                                    <img src={Ville1} alt="terrasse" className="img-fluid"/>
                                </figure>
                                <div className="media-body">
                                    <h3 className="mt-0"><a href="#">Presidential Room</a></h3>
                                    <ul className="room-specs">
                                        <li className="ion-ios-people-outline">4 voyageurs</li>
                                        <li className="ion-ios-crop"> 35m<sup>2</sup></li>
                                    </ul>
                                    <p>Nulla vel metus scelerisque ante sollicitudin. Fusce condimentum nunc ac nisi
                                        vulputate fringilla. </p>
                                    <p><a href="#" className="btn btn-primary btn-sm">Réserver</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 room-thumbnail-absolute d-none d-md-block">
                            <div className="media d-block room bg first-room"/>
                            <div className="media d-block room bg second-room"/>
                        </div>
                    </div>
                    <MyCarousel/>
                </div>
            </section>
        </>
        )
    }
}

export default Home;
