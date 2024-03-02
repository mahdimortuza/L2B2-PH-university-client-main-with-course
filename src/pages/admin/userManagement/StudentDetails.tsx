import { useParams } from "react-router-dom";

const StudentDetails = () => {
  const { studentId } = useParams();

  return <div>Student Details of {`${studentId}`}</div>;
};

export default StudentDetails;
