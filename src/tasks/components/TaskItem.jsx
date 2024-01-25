import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

import DeleteWarning from "./CustomDialog";

import "./TaskItem.css";
import useAuthentication from "../../hooks/useAuthentication";
import { useNavigate } from "react-router-dom";
import CustomDialog from "./CustomDialog";

export default function TaskItem({ task }) {
  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = React.useState(false);

  const navigate = useNavigate();
  const { token } = useAuthentication();

  const handleDeleteTask = async () => {
    setIsDeleteWarningOpen(false);
    console.log("task id", task._id);
    try {
      const result = await axios.delete(
        process.env.REACT_APP_API + `/tasks/${task._id}`,
        { headers: { Authorization: "Bearer " + token } }
      );

      console.log(result);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
    console.log(task._id);
  };

  return (
    <Box sx={{ width: 275 }} className={"task-item__container"}>
      <Card variant="elevation">
        <>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {task.title}
            </Typography>
            <Typography variant="h5" component="div">
              {task.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {task.description}
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Complete</Button>
            <Button
              startIcon={<DeleteIcon size="small" />}
              size="small"
              variant="outlined"
              color="error"
              onClick={() => setIsDeleteWarningOpen(true)}
            >
              Delete
            </Button>
            <Button size="small" variant="outlined">
              Edit
            </Button>
          </CardActions>
        </>
      </Card>
      <CustomDialog
        isOpen={isDeleteWarningOpen}
        onSetDialog={setIsDeleteWarningOpen}
        onAction={handleDeleteTask}
        title={"Delete this task?"}
        description={"This action can't be undone."}
      />
    </Box>
  );
}
