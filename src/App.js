import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    callAdvice();
  }, []);

  async function callAdvice() {
    const result = await fetch("https://api.adviceslip.com/advice");
    const response = await result.json();
    setAdvice(response.slip.advice);
    setCount((c) => c + 1);
    console.log("Response ", response);
  }
  return (
    <div className="App">
      <h1>{advice}</h1>
      <button onClick={callAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  );
}

export function Message(props) {
  return (
    <>
      <p>
        You have read <strong>{props.count}</strong> piece of advice
      </p>
    </>
  );
}
