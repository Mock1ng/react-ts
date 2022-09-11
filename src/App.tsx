import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken } from "firebase/messaging";
// import { onBackgroundMessage } from "firebase/messaging/sw";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function App() {
  const [isNotifPermissioned, setIsNotifPermissioned] = useState(false);

  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission().then(
        res => res === "granted" && setIsNotifPermissioned(true)
      );

      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      // const firebaseConfig = {
      //   apiKey: "AIzaSyBjA1yOzLBgu3_ySOxwQDrsdztKCeDiY0c",
      //   authDomain: "testing-notification-1feeb.firebaseapp.com",
      //   projectId: "testing-notification-1feeb",
      //   storageBucket: "testing-notification-1feeb.appspot.com",
      //   messagingSenderId: "845150088080",
      //   appId: "1:845150088080:web:6ff850416fbe64a5112115",
      //   measurementId: "G-SB89QB0TLW"
      // };

      // // Initialize Firebase
      // const app = initializeApp(firebaseConfig);
      // const messaging = getMessaging();

      // getToken({
      //   messaging,
      //   vapidKey:
      //     "BPoYD49k5CYcTD-tUaJZ_71Stz2bP9HPVaLkbJPAaHMNiHFnvbM9dly_ke9EesT6eB1-wJ5LItAPHvYsjcZVecs"
      // });

      // onBackgroundMessage(messaging, payload => {
      //   console.log("Message received. ", payload);
      //   // ...
      // });
    } else {
      console.log("browser doesn't support notification");
    }
  }, []);

  const testHandler = () => {
    const option = {
      body: "ini body dari notif",
      icon: "https://picsum.photos/id/237/200/200"
    };

    new Notification("teeeest", option);
    if (isNotifPermissioned) {
      // setTimeout(() => {
      // }, 5000);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={testHandler}>test notif</button>
        <audio controls autoPlay>
          <source src="./audio.ogg" type="audio/ogg" />
          <source src="./audio.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </header>
    </div>
  );
}

export default App;
