import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { start } from "../../redux/authSlice";
import "./AuthComponent.css";

function AuthComponent() {
  const dispatch = useDispatch();
  const { error, localId } = useSelector((store) => store.auth);
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
  }

  if (localId !== null) {
    navigate("/");
  }

  let errorOutput = null;
  if (error) {
    errorOutput = <div className="error"><strong style={{ color: "red" }}>{error}</strong></div>
  }

  return (
    <form onSubmit={onAuthStart} className="AuthComponent">
      {errorOutput}
      <div className="formGroup">
        <input
          type="email"
          className="formField"
          placeholder="email"
          name="email"
          required
        />
        <label htmlFor="email" className="formLabel">
          Email
        </label>
      </div>
      <div className="formGroup">
        <input
          type="password"
          className="formField"
          placeholder="password"
          name="password"
          required
        />
        <label htmlFor="password" className="formLabel">
          Password
        </label>
      </div>

      <div className="btns">
        <button>Sign in</button>
        <button>Sign up</button>
      </div>
    </form>
  );
}

export default AuthComponent;
