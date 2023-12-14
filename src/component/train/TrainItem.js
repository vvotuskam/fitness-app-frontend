import React from 'react';
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const TrainItem = ({train}) => {

    const navigate = useNavigate()

    return (
        <tr>
            <td>{train.name}</td>
            <td>{train.instructorName}</td>
            <td>{train.date}</td>
            <td>{train.time}</td>
            <td style={{display: 'flex', justifyContent: 'center'}}>
                <Button variant={'success'} onClick={() => navigate(`/train/${train.id}`)}>Details</Button>
            </td>
        </tr>
    );
};

export default TrainItem;