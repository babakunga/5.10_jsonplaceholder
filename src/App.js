import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickusers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {})
      .catch((err) => {});
  };
  const onClickuser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => {})
      .catch((err) => {});
  };

  return (
    <div className="App">
      <button onClick={onClickusers}>users</button>
      <button onClick={onClickuser1}>id=1のユーザ</button>
    </div>
  );
}
