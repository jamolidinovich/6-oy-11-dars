import React, { useState, useEffect } from "react";

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(intervalId);
            setIsRunning(false);
            // Pomodoro tamamlandı!
            alert("Pomodoro tamamlandı!");
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, minutes, seconds]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(60);
    setSeconds(0);
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div
      className="container w-50%  bg-white "
      style={{
        marginTop: "100px",
        borderRadius: "50px",
        width: "500px",
        paddingLeft: "100px",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <p
        style={{
          fontSize: "35px",
          marginLeft: "30px",
          marginTop: "-30px",
          fontFamily: "sans-serif",
          color: "#f84844",
        }}
      >
        {" "}
        React Pomodoro
      </p>
      <div
        className="pomodoro-container mx-auto"
        style={{
          display: "inline-block",
          paddingLeft: "100px",
          paddingTop: "100px",
          width: "300px",
          height: "300px",
          background: "red",
          borderRadius: "150px",
        }}
      >
        <h1
          className="timer"
          style={{
            fontSize: "60px",
            marginLeft: "-20px",
            marginTop: "-15px",
            color: "white",
          }}
        >
          {formatTime(minutes)}:{formatTime(seconds)}
        </h1>
        <div className="buttons">
          {!isRunning ? (
            <button
              onClick={startTimer}
              style={{
                padding: "7px",
                width: "70px",
                border: "none",
                borderRadius: "10px",
                marginRight: "10px",
                marginLeft: "-20px",
              }}
            >
              Boshla
            </button>
          ) : (
            <button
              onClick={pauseTimer}
              style={{
                padding: "7px",
                width: "70px",
                border: "none",
                borderRadius: "10px",
                marginRight: "10px",
                marginLeft: "-20px",
              }}
            >
              Stop
            </button>
          )}
          <button
            onClick={resetTimer}
            style={{
              padding: "7px",
              border: "none",
              borderRadius: "10px",
              width: "70px",
            }}
          >
            Qayta
          </button>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
