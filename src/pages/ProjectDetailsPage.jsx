import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AddTask from "../components/AddTask";
import TaskCard from "../components/TaskCard";

const API_URL = "http://localhost:5005";

export default function ProjectDetailsPage(props) {
  const [project, setProject] = useState(null); // can set to a empty object
  const { projectId } = useParams();

  function getProject() {
    axios
    .get(`${API_URL}/api/projects/${projectId}`)
    .then((response)=>{setProject(response.data)
      console.log("ESTA MIERDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", response.data)
    })
  }

  useEffect(() => {
    getProject();
  }, []);

  return (
    <div className="ProjectDetails">
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}
        
      <AddTask refreshTasks={getProject} projectId={projectId} />

      {project &&
        project.tasks.map((task) => <TaskCard key={task._id} task={task} />)}
        
    </div>
  );
}

