import React, { useEffect } from 'react';
import { useState } from 'react';

const Edit = (props) => {
    const [isEditable, setIsEditable] = useState(props.data.isEditable);
    const [courseName, setCourseName] = useState(props.data.courseName);
    const [boardName, setBoardName] = useState(props.data.boardName);
    const [rollNo, setRollNo] = useState(props.data.rollNo);
    const [markObt, setMarksObt] = useState(props.data.markObt);
    const [totalMarks, setTotalMarks] = useState(props.data.totalMarks);
    const [calPercentage, setCalPercentage] = useState(props.data.calPercentage);

    const handleEdit = () => {
        setIsEditable(!isEditable);
    }

    const handleCourse = (event) => {
        setCourseName(event.target.value);
    }

    const handleBoard = (event) => {
        setBoardName(event.target.value);
    }
    const handleRollNo = (event) => {
        setRollNo(event.target.value);
    }
    const handleObtM = (event) => {
        setMarksObt(event.target.value);
    }
    const handleTotal = (event) => {
        setTotalMarks(event.target.value);
    }
    const handlePercent = () => {
        setCalPercentage(document.getElementById('percentage').value);
        const percentData = (markObt / totalMarks) * 100;
        const data = {
            'id': props.data.id,
            'courseName': courseName,
            'boardName': boardName,
            'rollNo': rollNo,
            'markObt': markObt,
            'totalMarks': totalMarks,
            'percentData': percentData,
            'isEditable': isEditable
        };
        props.arrData.splice(props.index,1,data); 
        props.setArrData([...props.arrData]);
        setIsEditable(!isEditable);
    }

    const handleDelete = () => {
        props.arrData.splice(props.index, 1);
        props.setArrData([...props.arrData]);
    }

    return (
        <tr>
            <td>{!isEditable ? props.data.courseName : <select value={courseName} onChange={handleCourse}>
                <option>10th</option>
                <option>12th</option>
                <option>Graduation</option>
                <option>PostGraduation</option>
                <option>Others</option>
            </select>}</td>
            <td>{!isEditable ? props.data.boardName : <input value={boardName} onChange={handleBoard} />}</td>
            <td>{!isEditable ? props.data.rollNo : <input value={rollNo} onChange={handleRollNo} />}</td>
            <td>{!isEditable ? props.data.markObt : <input value={markObt} onChange={handleObtM} />}</td>
            <td>{!isEditable ? props.data.totalMarks : <input value={totalMarks} onChange={handleTotal} />}</td>
            <td>{!isEditable ? props.data.percentData : <input id="percentage" type="number" value={(markObt / totalMarks) * 100} disabled />}</td>
            <td><button onClick={handleDelete}>Delete</button>{!isEditable ? <button onClick={handleEdit}>Edit</button> : <button onClick={handlePercent}>Add Data</button>}</td>
        </tr>
    )
}

export default Edit