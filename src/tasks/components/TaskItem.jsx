import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

import DeleteWarning from "./DeleteWarning";

import "./TaskItem.css";

export default function TaskItem({ task }) {
  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = React.useState(false);

  const handleDeleteTask = (taskId) => {
    setIsDeleteWarningOpen(false);
    console.log("Deleted " + task.title);
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
      <DeleteWarning
        isDeleteWarningOpen={isDeleteWarningOpen}
        onSetDeleteWarning={setIsDeleteWarningOpen}
        onDeleteTask={handleDeleteTask}
      />
    </Box>
  );
}
