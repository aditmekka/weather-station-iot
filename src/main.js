import "./style.css";

import { db } from "./firebase";

import {
  ref,
  onValue
} from "firebase/database";



document.querySelector("#app").innerHTML = `
  <div class="background"></div>

  <div class="container">

    <header class="header">
      <div>
        <h1>Weather Station</h1>
        <p class="subtitle">
          Live Environmental Monitoring
        </p>
      </div>

      <div class="live-pill">
        LIVE
      </div>
    </header>



    <div class="top-grid">

      <div class="hero-card">
        <div class="hero-label">
          Temperature
        </div>

        <div class="hero-value" id="temp">
          -- °C
        </div>

        <div class="progress-wrap">
          <div class="progress-bar">
            <div
              class="progress-fill"
              id="tempBar">
            </div>
          </div>
        </div>
      </div>



      <div class="stats-grid">

        <div class="card">
          <div class="card-title">
            Humidity
          </div>

          <div class="card-value" id="humidity">
            -- %
          </div>

          <div class="mini-bar">
            <div
              class="mini-fill"
              id="humidityBar">
            </div>
          </div>
        </div>



        <div class="card">
          <div class="card-title">
            Pressure
          </div>

          <div class="card-value" id="pressure">
            -- hPa
          </div>

          <div class="mini-bar">
            <div
              class="mini-fill"
              id="pressureBar">
            </div>
          </div>
        </div>



        <div class="card">
          <div class="card-title">
            Wind Speed
          </div>

          <div class="card-value" id="windspeed">
            -- m/s
          </div>

          <div class="mini-bar">
            <div
              class="mini-fill"
              id="windBar">
            </div>
          </div>
        </div>



        <div class="card compass-card">
          <div class="card-title">
            Wind Direction
          </div>

          <div class="compass">
            <div class="compass-center"></div>

            <div
              class="compass-arrow"
              id="windArrow">
            </div>
          </div>

          <div class="wind-dir-text" id="winddir">
            --°
          </div>
        </div>

      </div>

    </div>



    <div class="bottom-grid">

      <div class="wide-card">
        <h2>Realtime Status</h2>

        <div class="status-grid">

          <div class="status-item">
            <span>Temperature</span>
            <strong id="tempStatus">
              --
            </strong>
          </div>

          <div class="status-item">
            <span>Humidity</span>
            <strong id="humidityStatus">
              --
            </strong>
          </div>

          <div class="status-item">
            <span>Pressure</span>
            <strong id="pressureStatus">
              --
            </strong>
          </div>

          <div class="status-item">
            <span>Wind</span>
            <strong id="windStatus">
              --
            </strong>
          </div>

        </div>
      </div>

    </div>

  </div>
`;



const tempEl = document.querySelector("#temp");
const humEl = document.querySelector("#humidity");
const pressureEl = document.querySelector("#pressure");
const windspeedEl = document.querySelector("#windspeed");
const winddirEl = document.querySelector("#winddir");



const tempBar = document.querySelector("#tempBar");
const humidityBar = document.querySelector("#humidityBar");
const pressureBar = document.querySelector("#pressureBar");
const windBar = document.querySelector("#windBar");
const windArrow = document.querySelector("#windArrow");



const tempStatus = document.querySelector("#tempStatus");
const humidityStatus = document.querySelector("#humidityStatus");
const pressureStatus = document.querySelector("#pressureStatus");
const windStatus = document.querySelector("#windStatus");



const currentRef = ref(db, "/current");



onValue(currentRef, (snapshot) => {

  const data = snapshot.val();

  if (!data) return;



  tempEl.innerText =
    data.t.toFixed(1) + " °C";

  humEl.innerText =
    data.h.toFixed(1) + " %";

  pressureEl.innerText =
    data.p.toFixed(1) + " hPa";

  windspeedEl.innerText =
    data.ws.toFixed(1) + " m/s";

  winddirEl.innerText =
    data.wd + "°";



  tempBar.style.width =
    Math.min((data.t / 50) * 100, 100) + "%";

  humidityBar.style.width =
    Math.min(data.h, 100) + "%";

  pressureBar.style.width =
    Math.min(((data.p - 950) / 100) * 100, 100) + "%";

  windBar.style.width =
    Math.min((data.ws / 30) * 100, 100) + "%";



  windArrow.style.transform =
    `translate(-50%, -100%) rotate(${data.wd}deg)`;



  tempStatus.innerText =
    data.t.toFixed(1) + " °C";

  humidityStatus.innerText =
    data.h.toFixed(1) + " %";

  pressureStatus.innerText =
    data.p.toFixed(1) + " hPa";

  windStatus.innerText =
    data.ws.toFixed(1) + " m/s";

});