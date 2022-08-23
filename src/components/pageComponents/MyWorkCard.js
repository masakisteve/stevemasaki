import React from 'react'
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Button,
    Badge,
    Modal,
    ModalBody,
} from "reactstrap";
import { FaHandPointer, FaGithub, FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

function MyWorkCard(props) {
    const [modal1, setModal1] = React.useState(false);

    let badgeText
    if (props.activity) {
        badgeText = "STILL ONGOING"
    } else {
        badgeText = "NOT ACTIVE"
    }
    return (
        <>
            <motion.Card style={{ width: "20rem", height: '26rem' }}
                className="card--container"
                initial={{ x: '-100vw', }}
                animate={{ x: 0 }}
                exit={{ x: '100vw' }}
                transition={{ duration: 0.5 }}>
                <iframe
                    title="file"
                    style={{ width: '100%', height: '60%' }}
                    scrolling="no"
                    src={props.iframelink}
                    className="holds-the-iframe"
                />
                
                {badgeText && <Badge color="success" className="mr-1 card--badge">{badgeText}</Badge>}

                <CardBody>
                    <CardTitle tag="h6">
                        <div className='text-sm-right text-secondary'>
                            {props.title}
                        </div>
                    </CardTitle>
                    <CardText>
                        <div className='text-sm-right text-secondary'>
                            {props.description}
                        </div>
                    </CardText>
                    <Button className="btn-round" color="primary" outline href={props.applink} >
                        <FaHandPointer />
                        {" "}
                    </Button>
                    {" "}
                    <Button className="btn-round" color="primary" outline href={props.githublink} >
                        <FaGithub />
                        {" "}
                    </Button>
                    <Button className="btn-round" color="primary" onClick={() => setModal1(true)} >
                        <FaInfoCircle />
                        {" "}
                    </Button>

                    <Modal isOpen={modal1} toggle={() => setModal1(false)}>
                        <div className="modal-header justify-content-center">
                            <button
                                className="close"
                                type="button"
                                onClick={() => setModal1(false)}
                            >
                                <i className="now-ui-icons ui-1_simple-remove"></i>
                            </button>
                            <h4 className="title title-up">Modal title</h4>
                        </div>
                        <ModalBody>
                            <p>
                                {props.technologies}
                            </p>
                        </ModalBody>
                        <div className="modal-footer">

                            <Button
                                color="danger"
                                type="button"
                                onClick={() => setModal1(false)}
                            >
                                Close
                            </Button>
                        </div>
                    </Modal>
                </CardBody>
            </motion.Card>
        </>
    )
}

export default MyWorkCard