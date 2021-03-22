import React, { useRef } from "react";

const Home = (props) => {
  const videoRef = useRef();

  React.useEffect(() => {
    videoRef.current.src = "skeleton.mp4";
    console.log(videoRef.current.src);
  }, []);
  return (
    <section className="home">
      <h3>Sign Up or Log In to Create Creepy Costumes!</h3>
      <video ref={videoRef} onClick={() => videoRef.current.play()} />
    </section>
  );
};

export default Home;
