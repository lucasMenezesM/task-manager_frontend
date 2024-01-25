import { Button } from "@mui/material";
import "./InitialPage.css";
import { useNavigate } from "react-router-dom";

export default function InitialPage() {
  const navigate = useNavigate();

  return (
    <div className="initial-page__container">
      <div className="initial-page__apresentation-box">
        <h2>Welcome to the SuperTasks – Your Personal Task Manager!</h2>

        <p>
          Streamline your daily life with our intuitive task management app.
          Effortlessly create, organize, and accomplish your tasks.
        </p>

        <p>
          Discover the simplicity of task management with SuperTasks. Achieve
          more with less effort.
        </p>

        <p>
          <span>
            Sign up now and experience the ultimate task management solution.
          </span>
        </p>

        <Button
          onClick={() => navigate("/signup")}
          className="initial-page__btn"
          sx={{
            width: 150,
            bgcolor: "#56da6c",
            color: "white",
            mt: 2,
            fontWeight: 800,
          }}
          variant="contained"
        >
          Sign Up
        </Button>

        {/* <p>
          Empower your productivity here – Where tasks become accomplishments!
        </p> */}
      </div>

      <div className="initial-page__box-1">
        <div className="initial-page__box-image">
          <img src="/assets/images/image-1.jpg" alt="image1" />
        </div>

        <div className="initial-page__box-text">
          <h3>
            "Effortless Task Creation: Quickly add and categorize tasks with a
            few taps.
          </h3>
          <h4>
            Stay on top of your tasks, boost productivity, and reclaim control
            of your time with
          </h4>
          <p>
            Organize your life, one task at a time. Start your journey to a more
            productive you today
          </p>
        </div>
      </div>
      <div className="initial-page__box-2">
        <div className="initial-page__box-image">
          <img src="/assets/images/image-2.jpg" alt="image2" />
        </div>

        <div className="initial-page__box-text">
          <h3>Already have an account? Get Login to create your tasks!</h3>
          <p>
            Get ready to transform the way you work. Get started with SuperTasks
            now!
          </p>
          <Button
            className="initial-page__btn"
            sx={{
              width: 150,
              bgcolor: "#56da6c",
              color: "white",
              mt: 2,
              fontWeight: 800,
            }}
            variant="contained"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
