import { css } from "../styled-system/css";

function LoadingScreen() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff",
        color: "#212121",
        fontSize: "16px",
      }}
    >
      <img
        src={"/img/loading.jpg"}
        alt="loading image"
        className={css({
          animationName: "spin",
          animationDuration: "5s",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
        })}
      />
    </div>
  );
}

export default LoadingScreen;
