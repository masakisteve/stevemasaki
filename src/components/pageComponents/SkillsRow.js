import React from 'react'
import {
    Progress,
    Card,
    CardBody
} from "reactstrap";
import { motion } from 'framer-motion';


function SkillsRow(props) {
    return (
        <>
                <motion.tr className='skills-row'
                 initial={{x:'-100vw',}}
                 animate={{x:0}}
                 exit={{x:'100vw'}}
                 transition={{duration:0.5}}
                 whileHover={{scale:1.02}}>
                    <td>
                        <img
                            alt="..."
                            className="rounded-circle img-raised skills-icons"
                            src={`../../assets/img/icons/${props.icon}`}
                        ></img>
                    </td>
                    <td>
                        <h6>{props.title}</h6>
                        <p>Since: {props.startdate}</p>
                    </td>
                    <td>
                        <div className="progress-container progress-info">
                            <span className="progress-badge">Progress</span>
                            <Progress max="100" value={props.progress}>
                                <span className="progress-value">{props.progress}%</span>
                            </Progress>
                        </div>
                    </td>

                </motion.tr>
        </>
    )
}

export default SkillsRow