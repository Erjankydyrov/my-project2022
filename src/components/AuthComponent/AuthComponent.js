import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { start } from "../../redux/authSlice";
import classes from "./AuthComponent.module.css"

function AuthComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onAuthStart(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    dispatch(
      start({
        email: formData.get("email"),
        password: formData.get("password"),
        method:
          event.nativeEvent.submitter.innerText === "Sign up"
            ? "signup"
            : "signin",
      })
    );

    navigate("/");
  }
  return (
    <form onSubmit={onAuthStart} className={classes.AuthComponent}>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>

      <button>Sign in</button>
      <button>Sign up</button>
    </form>
  );
}

export default AuthComponent;
