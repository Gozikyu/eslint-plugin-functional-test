import React from "react";
import "./App.css";

type Props = {
  readonly name: string;
  readonly hobbies: readonly string[];
};

const User = (props: Props) => {
  return (
    <div>
      <div>name is {props.name}</div>
      <h2>hobbies</h2>
      {props.hobbies.map((hobby) => (
        <p>{hobby}</p>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <User name={"taro"} hobbies={["tennis", "game", "manga"]} />
    </div>
  );
}

export default App;
