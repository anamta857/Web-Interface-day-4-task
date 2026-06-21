import { useState } from "react";
import "./App.css";

function App() {
  const [studyHours, setStudyHours] = useState("");
  const [attendance, setAttendance] = useState("");
  const [assignments, setAssignments] = useState("");
  const [marks, setMarks] = useState("");

  const [grade, setGrade] = useState("");
  const [category, setCategory] = useState("");

  const predictPerformance = () => {
    const score =
      Number(studyHours) * 5 +
      Number(attendance) * 0.3 +
      Number(assignments) * 2 +
      Number(marks) * 0.5;

    if (score >= 90) {
      setGrade("A");
      setCategory("Excellent");
    } else if (score >= 75) {
      setGrade("B");
      setCategory("Good");
    } else if (score >= 60) {
      setGrade("C");
      setCategory("Average");
    } else {
      setGrade("D");
      setCategory("Needs Improvement");
    }
  };

  return (
    <div className="container">
      <h1>🎓 Student Performance Predictor</h1>

      <input
        type="number"
        placeholder="Study Hours"
        value={studyHours}
        onChange={(e) => setStudyHours(e.target.value)}
      />

      <input
        type="number"
        placeholder="Attendance (%)"
        value={attendance}
        onChange={(e) => setAttendance(e.target.value)}
      />

      <input
        type="number"
        placeholder="Assignments Completed"
        value={assignments}
        onChange={(e) => setAssignments(e.target.value)}
      />

      <input
        type="number"
        placeholder="Previous Marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
      />

      <button onClick={predictPerformance}>
        Predict Performance
      </button>

      {grade && (
        <div className="result">
          <h2>Predicted Grade: {grade}</h2>
          <h3>Performance Category: {category}</h3>
        </div>
      )}
    </div>
  );
}

export default App;