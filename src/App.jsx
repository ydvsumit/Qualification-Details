import { useState } from 'react'
import './App.css'
import Edit from './Edit';

function App() {
  const [courseName, setCourseName] = useState("10th");
  const [boardName, setBoardName] = useState('');
  const [rollNo, setRollNo] = useState();
  const [markObt, setMarksObt] = useState();
  const [totalMarks, setTotalMarks] = useState();
  const [calPercentage, setCalPercentage] = useState();
  const [arrData, setArrData] = useState([]);
  const [isEditable, setIsEditable] = useState(false);

  let id = 0;

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

  // const calPer = () => {
  //   setCalPercentage(eval((markObt/totalMarks)*100));
  // }

  const handlePer = (event) => {
    setCalPercentage(document.getElementById('percentage').value);
    const percentData = (markObt / totalMarks) * 100;
    const data = {
      'id': id,
      'courseName': courseName, 
      'boardName': boardName, 
      'rollNo': rollNo, 
      'markObt': markObt, 
      'totalMarks': totalMarks, 
      'percentData': percentData,
      'isEditable': isEditable
    };
    setCourseName('10th');
    setBoardName('');
    setRollNo('');
    setMarksObt('');
    setTotalMarks('');
    setArrData([...arrData, data]);
    id = id + 1;
  }

  return (
    <>
      <div>
        <h1>Qualification Details</h1>
        <table style={{ border: "2px solid black" }}>
          <thead>
            <tr>
              <th>Select Course</th>
              <th>Board Name</th>
              <th>Roll No</th>
              <th>Marks Obtained</th>
              <th>Total Marks</th>
              <th>Percentage</th>
              <th>Add Others</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <select value={courseName} onChange={handleCourse}>
                  <option>10th</option>
                  <option>12th</option>
                  <option>Graduation</option>
                  <option>PostGraduation</option>
                  <option>Others</option>
                </select>
              </td>
              <td>
                <input placeholder='enter your board name' value={boardName} type="text" onChange={handleBoard} />
              </td>
              <td>
                <input placeholder='enter your Roll No' value={rollNo} type="number" onChange={handleRollNo} />
              </td>
              <td>
                <input placeholder='enter your obtained marks' value={markObt} type="number" onChange={handleObtM} />
              </td>
              <td>
                <input placeholder='enter your total marks' value={totalMarks} type="number" onChange={handleTotal} />
              </td>
              <td>
                <input id='percentage' value={(markObt / totalMarks) * 100} type="number" disabled />
              </td>
              <td>
                <button onClick={handlePer}>Add Data</button>
              </td>
            </tr>

            {arrData && arrData.map((data, index) => <Edit data={data} index={index} arrData={arrData} setArrData={setArrData}/>)}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
