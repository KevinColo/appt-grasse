import * as React from 'react';
import images from "./picturesApart";


export default class MyCarousel extends React.Component {
    activeSlide = 0;
    render() {
        return (
            <>
            <div className="row mt-5">
                {images.map((image, key) => (
                    <div className="col-md-4 col-lg-2">
                        <button type="button" data-toggle="modal" data-target="#myCarousel"
                                className="btn btn-outline-light active" onClick={()=> {
                                    this.activeSlide = key;
                                    console.log((this.activeSlide))
                                }}
                                data-slide-to={key}>
                            <img src={image} className="img-fluid" />
                        </button>
                    </div>
                ))
                }
            </div>
            <div id="myCarousel" className="modal fade" role="dialog"
                 aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body p-0">
                            <div id="carouselControl" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    {images.map((image, key) => (
                                        <div className={this.activeSlide === key ? "carousel-item active" : "carousel-item"}>
                                            <img src={image} className="img-fluid d-block"/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                                <a className="carousel-control-prev" href="#carouselControl" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselControl" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                    </div>
                </div>
            </div>
                </>
        );
      }
}
