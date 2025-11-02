"use no memo"; // 컴포넌트가 React 컴파일러에 의해 컴파일되지 않도록 제외합니다.
import { useState } from "react";
import SlowComponent from "./SlowComponent";

export default function NoCompilerSlowComponentWrapper() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>
        Increment count (SlowComponent에 영향을 주지 않는 상태 변화)
      </button>

      <h1>Value: {value}</h1>
      <button onClick={() => setValue((v) => v + 1)}>
        Increment value (SlowComponent에 영향을 주는 상태 변화(props 전달)
      </button>

      <SlowComponent value={value} />
    </div>
  );
}
