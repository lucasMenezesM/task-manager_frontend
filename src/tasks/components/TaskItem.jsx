// import * as React from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import DeleteIcon from "@mui/icons-material/Delete";
// import axios from "axios";

// import DeleteWarning from "./CustomDialog";

// import "./TaskItem.css";
// import useAuthentication from "../../hooks/useAuthentication";
// import { useNavigate } from "react-router-dom";
// import CustomDialog from "./CustomDialog";

// export default function TaskItem({ task }) {
//   const [isDeleteWarningOpen, setIsDeleteWarningOpen] = React.useState(false);

//   const navigate = useNavigate();
//   const { token } = useAuthentication();

//   const handleDeleteTask = async () => {
//     setIsDeleteWarningOpen(false);
//     console.log("task id", task._id);
//     try {
//       const result = await axios.delete(
//         process.env.REACT_APP_API + `/tasks/${task._id}`,
//         { headers: { Authorization: "Bearer " + token } }
//       );

//       console.log(result);
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//     }
//     console.log(task._id);
//   };

//   return (
//     <Box sx={{ width: 275 }} className={"task-item__container"}>
//       <Card variant="elevation">
//         <>
//           <CardContent>
//             <Typography
//               sx={{ fontSize: 14 }}
//               color="text.secondary"
//               gutterBottom
//             >
//               {task.title}
//             </Typography>
//             <Typography variant="h5" component="div">
//               {task.title}
//             </Typography>
//             <Typography sx={{ mb: 1.5 }} color="text.secondary">
//               {task.description}
//             </Typography>
//             <Typography variant="body2">
//               well meaning and kindly.
//               <br />
//               {'"a benevolent smile"'}
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <Button size="small">Complete</Button>
//             <Button
//               startIcon={<DeleteIcon size="small" />}
//               size="small"
//               variant="outlined"
//               color="error"
//               onClick={() => setIsDeleteWarningOpen(true)}
//             >
//               Delete
//             </Button>
//             <Button size="small" variant="outlined">
//               Edit
//             </Button>
//           </CardActions>
//         </>
//       </Card>
//       <CustomDialog
//         isOpen={isDeleteWarningOpen}
//         onSetDialog={setIsDeleteWarningOpen}
//         onAction={handleDeleteTask}
//         title={"Delete this task?"}
//         description={"This action can't be undone."}
//       />
//     </Box>
//   );
// }
import { useContext, useState } from "react";

import axios from "axios";
import { CiCircleCheck } from "react-icons/ci";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import CustomDialog from "./CustomDialog";
import { AuthContext } from "../../shared/context/auth-context";
import "./TaskItem.css";

export default function TaskItem({ task, onCompleteTask }) {
  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useState(false);

  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const opcoes = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };
  const formattedDate = new Date(task.creation_date).toLocaleDateString(
    "en-US",
    opcoes
  );

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
    <div className="task-item__box">
      <h4>{task.title}</h4>
      <div className="task-item__box-text">
        <p>{task.description}</p>
        <p>Created: {formattedDate}</p>
        <p>{task.completed ? `Completed! ✅` : "Not Completed. ❌"}</p>
      </div>
      <div className="task-item__actions">
        <Button
          onClick={() => onCompleteTask(task._id)}
          sx={{ color: "white", bgcolor: "#69db7c", py: 0.2, px: 0.7, mx: 0.6 }}
          variant="contained"
        >
          Complete
        </Button>
        <Button
          onClick={() => setIsDeleteWarningOpen(true)}
          sx={{ color: "white", bgcolor: "#e03131", py: 0.2, px: 0.7, mx: 0.6 }}
          variant="contained"
        >
          Delete
        </Button>
        <Button
          sx={{ color: "white", bgcolor: "#a5d8ff", py: 0.2, px: 0.7, mx: 0.6 }}
          variant="text"
        >
          Edit
        </Button>
        <CustomDialog
          isOpen={isDeleteWarningOpen}
          onSetDialog={setIsDeleteWarningOpen}
          onAction={handleDeleteTask}
          title={"Delete this task?"}
          description={"This action can't be undone."}
        />
      </div>
    </div>
  );
}
