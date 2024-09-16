import React from "react";
import classes from "./main-header-background.module.css";

export default function MainHeaderBackground() {
  return (
    <>
      <div className={classes["header-background"]}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#59453c", stopOpacity: "1" }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#8f3a09", stopOpacity: "1" }}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradient)"
            d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,181.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 800 800"
        >
          <g transform="matrix(1,0,0,1,0,0)">
            <circle
              r="50"
              cx="684"
              cy="684"
              stroke-width="4"
              stroke="#ff3838"
              fill="none"
              opacity="0.1"
              transform="rotate(100, 400, 400)"
            ></circle>
            <circle
              r="57.69230769230769"
              cx="662.1538461538462"
              cy="662.1538461538462"
              stroke-width="4.923076923076923"
              stroke="#f74459"
              fill="none"
              opacity="0.16923076923076924"
              transform="rotate(92.3076923076923, 400, 400)"
            ></circle>
            <circle
              r="65.38461538461539"
              cx="640.3076923076923"
              cy="640.3076923076923"
              stroke-width="5.846153846153847"
              stroke="#ee4e71"
              fill="none"
              opacity="0.23846153846153847"
              transform="rotate(84.61538461538461, 400, 400)"
            ></circle>
            <circle
              r="73.07692307692308"
              cx="618.4615384615385"
              cy="618.4615384615385"
              stroke-width="6.769230769230769"
              stroke="#e55884"
              fill="none"
              opacity="0.3076923076923077"
              transform="rotate(76.92307692307692, 400, 400)"
            ></circle>
            <circle
              r="80.76923076923077"
              cx="596.6153846153846"
              cy="596.6153846153846"
              stroke-width="7.6923076923076925"
              stroke="#dc6095"
              fill="none"
              opacity="0.3769230769230769"
              transform="rotate(69.23076923076923, 400, 400)"
            ></circle>
            <circle
              r="88.46153846153845"
              cx="574.7692307692307"
              cy="574.7692307692307"
              stroke-width="8.615384615384617"
              stroke="#d367a4"
              fill="none"
              opacity="0.4461538461538461"
              transform="rotate(61.53846153846154, 400, 400)"
            ></circle>
            <circle
              r="96.15384615384616"
              cx="552.9230769230769"
              cy="552.9230769230769"
              stroke-width="9.538461538461538"
              stroke="#c96fb2"
              fill="none"
              opacity="0.5153846153846154"
              transform="rotate(53.84615384615385, 400, 400)"
            ></circle>
            <circle
              r="103.84615384615384"
              cx="531.0769230769231"
              cy="531.0769230769231"
              stroke-width="10.461538461538462"
              stroke="#be75bf"
              fill="none"
              opacity="0.5846153846153846"
              transform="rotate(46.15384615384615, 400, 400)"
            ></circle>
            <circle
              r="111.53846153846155"
              cx="509.2307692307692"
              cy="509.2307692307692"
              stroke-width="11.384615384615385"
              stroke="#b37bcb"
              fill="none"
              opacity="0.6538461538461539"
              transform="rotate(38.46153846153846, 400, 400)"
            ></circle>
            <circle
              r="119.23076923076923"
              cx="487.38461538461536"
              cy="487.38461538461536"
              stroke-width="12.307692307692308"
              stroke="#a781d6"
              fill="none"
              opacity="0.7230769230769231"
              transform="rotate(30.769230769230774, 400, 400)"
            ></circle>
            <circle
              r="126.92307692307692"
              cx="465.53846153846155"
              cy="465.53846153846155"
              stroke-width="13.230769230769232"
              stroke="#9a87e1"
              fill="none"
              opacity="0.7923076923076923"
              transform="rotate(23.07692307692308, 400, 400)"
            ></circle>
            <circle
              r="134.6153846153846"
              cx="443.6923076923077"
              cy="443.6923076923077"
              stroke-width="14.153846153846155"
              stroke="#8c8dec"
              fill="none"
              opacity="0.8615384615384616"
              transform="rotate(15.384615384615387, 400, 400)"
            ></circle>
            <circle
              r="142.30769230769232"
              cx="421.8461538461538"
              cy="421.8461538461538"
              stroke-width="15.076923076923077"
              stroke="#7d92f5"
              fill="none"
              opacity="0.9307692307692308"
              transform="rotate(7.692307692307693, 400, 400)"
            ></circle>
            <circle
              r="150"
              cx="400"
              cy="400"
              stroke-width="16"
              stroke="#6b97ff"
              fill="none"
              opacity="1"
              transform="rotate(0, 400, 400)"
            ></circle>
          </g>
        </svg>
      </div>
    </>
  );
}
