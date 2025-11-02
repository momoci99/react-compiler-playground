import "./App.css";
import SlowComponentWrapperWithCompiler from "./SlowComponentWrapperWithCompiler";
import NoCompilerSlowComponentWrapper from "./NoCompilerSlowComponentWrapper";

function App() {
  return (
    <>
      <div style={{ display: "flex", gap: "50px" }}>
        <div>
          <h2>컴파일 포함</h2>
          <SlowComponentWrapperWithCompiler />
        </div>
        <div>
          <h2>컴파일 미포함</h2>
          <NoCompilerSlowComponentWrapper />
        </div>
      </div>
    </>
  );
}

export default App;
