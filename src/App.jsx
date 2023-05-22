import { useState } from "react";
import "./App.css";
import Button from "./component/Button";
import TextInput from "./component/TextInput";
import { BiSearch } from "react-icons/bi";
import SignInModal from "./component/SIgnInModal";
const API_KEY = "058814dadf30b7b92760a5cd779a9817";

function App() {
  const [cityName, setCityName] = useState("");
  const [modal, setModal] = useState(false);
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(false);

  function checkSignInModal() {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  }

  function getWeather() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    )
      .then((data) => {
        data.json();
      })
      .then((value) => {
        if (value.cod != 200) {
          throw value;
        }
        setWeather(value);
        console.log(value);
      })
      .catch((error) => {
        alert(error.cod);
        setCityName(true);
        // setError(true);
      });
  }

  return (
    <div>
      <div className="appContainer">
        <div className="wrap">
          <Button onClick={checkSignInModal} className="btn">
            Sign In
          </Button>
          <div className="paraWrap">
            <h3 className="para">Hello,</h3>
            <h2 className="subPara">Chek the weather by the city</h2>
          </div>
          <div className="searchWrap">
            <TextInput
              className={"input searchInput"}
              placeholder={"Search city"}
              type="text"
              onChange={(e) => setCityName(e.target.value)}
              defaultValue={cityName}
            ></TextInput>
            <BiSearch className="searchIcon" size={30} onClick={getWeather} />
          </div>
        </div>
        {modal ? (
          <SignInModal closeModal={checkSignInModal} className="modal" />
        ) : null}
      </div>
    </div>
  );
}

export default App;
