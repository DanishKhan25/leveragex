import { Box, Button, Divider } from "@mui/material";
import Googleicon from "../../assets/svg-icons/Googleicon";
import Facebook from "../../assets/svg-icons/Facebook";
import classes from "./textVideo.module.scss";
import hero from "../../assets/hero.jpg";
const TextVideo = () => {
  return (
    <section className={classes["container"]}>
      <article className={classes["left-pane"]}>
        <p className={classes["heading"]}>
          Buy Trade and hold xBTC and Lex Coin.
        </p>
        <Box
          className={classes["buttons-wrapper"]}
          sx={{ margin: "0 auto", width: "60%", textAlign: "center" }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "#F0B90B",
              color: "#fff",
              textTransform: "none",
              fontSize: "24px",
            }}
          >
            Sign up with Email or Number
          </Button>
          <Divider sx={{ mt: 2, color: "#707a8a" }}> or continue with </Divider>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "15px 0px",
            }}
          >
            <Button
              sx={{
                bgcolor: "#eaecef",
                color: "#1E2329",
                textTransform: "none",
                marginRight: "16px",
                fontSize: "16px",
              }}
            >
              <Googleicon /> {"  "}
              Login with Google
            </Button>
            <Button
              sx={{
                bgcolor: "#eaecef",
                color: "#1E2329",
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              <Facebook />
              {"  "}
              Login with FaceBook
            </Button>
          </div>
        </Box>
      </article>
      <article className={classes["rith-pane"]}>
        {/* Replace the video URL with your actual video source */}
        {/* <video
          src="https://www.youtube.com/embed/OgJ_0_ddzxc"
          controls
          width="100%"
        /> */}
        {/* 
        <iframe
          title="YouTube Video"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/OgJ_0_ddzxc"
          frameBorder="0"
          allowFullScreen
        /> */}

        <img src={hero} alt="img" width="68%" />
      </article>
    </section>
  );
};

export default TextVideo;
