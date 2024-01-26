import { Button } from "@mui/material";

import "./EmptyTasks.css";
import { useNavigate } from "react-router-dom";

export default function EmptyTasks() {
  const navigate = useNavigate();
  return (
    <div className="empty-tasks__page">
      <div className="empty-tasks__container">
        <div className="empty-tasks__box-container">
          <img
            src="/assets/images/image-create-tasks-1.jpg"
            alt="create-new-task"
          />
          <div className="empty-tasks__box-text">
            <h3>Start creating your tasks</h3>
            <p>Start right now by creating your first task in the app!</p>
            <Button
              sx={{ color: "#b197fc" }}
              onClick={() => navigate("/newTask")}
              variant="text"
            >
              Create new Task
            </Button>
          </div>
        </div>
        <div className="empty-tasks__box-container">
          <img
            src="/assets/images/image-create-tasks-2.jpg"
            alt="create-new-task"
          />

          <div className="empty-tasks__box-text">
            <h3>Simpler than you can imagine</h3>
            <p>
              Discover the simplicity of task management with [Your App Name].
              Achieve more with less effort!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
