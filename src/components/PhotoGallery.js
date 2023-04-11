import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class PhotoGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photosByCategory: {
                amoureuses: [
                    {
                        id: 1,
                        src: require('../assets/images/couple-3.jpg'),
                    },
                    {
                        id: 2,
                        src: require('../assets/images/couple-2.jpg'),
                    },
                    {
                        id: 7,
                        src: require('../assets/images/couple-2.jpg'),
                    }
                ],
                amicals: [
                    {
                        id: 5,
                        src: require('../assets/images/friendship-1.jpg'),
                    },
                    {
                        id: 6,
                        src: require('../assets/images/friendship-2.jpg'),
                    },
                ],
                professionnels: [
                    {
                        id: 3,
                        src: require('../assets/images/work-1.jpg'),
                    },
                    {
                        id: 4,
                        src: require('../assets/images/work-3.jpg'),
                    },
                ],
            },
        };
    }

    render() {
        const { photosByCategory } = this.state;

        return (
            <div className="d-flex">
                <div className="row">
                    {Object.entries(photosByCategory).map(([category, photos]) => (
                        <div key={category} className="col-md-4">
                            <h4>Rencontres {category}</h4>
                            <div className="row my-3">
                                {photos.map(photo => (
                                    <div className="col-md-7 mb-5 photo-item" key={photo.id}>
                                        <Card>
                                            <CardImg
                                                top
                                                width="100%"
                                                src={photo.src}
                                                alt={photo.title}
                                                style={{ objectFit: 'cover', height: '150px' }}
                                            />
                                            <CardBody>
                                                <CardTitle>{photo.title}</CardTitle>
                                                <CardSubtitle>{photo.description}</CardSubtitle>
                                            </CardBody>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default PhotoGallery;
