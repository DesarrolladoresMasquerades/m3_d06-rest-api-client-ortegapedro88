import { Link } from "react-router-dom";

export default function TaskCard(props) {
  const {
    project: { _id, title, description, project },
  } = props;

  return (
    <div className="TaskCard card">
      <Link to={`/tasks/${_id}`}>
        <h3>{title}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{description} </p>
      <h4>{project._id}</h4>
    </div>
  );
}
