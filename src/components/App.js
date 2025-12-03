import React, { useState, useEffect } from "react";
import ReactMemo from "./ReactMemo";
import UseMemoExample from "./UseMemo";


export default function App() {
const [tasks, setTasks] = useState(["Initial task"]);
const [counter, setCounter] = useState(0);
const [input, setInput] = useState("");
const [valid, setValid] = useState(false);


useEffect(() => {
setValid(input.trim().length > 5);
}, [input]);


const addNewTodo = () => {
setTasks([...tasks, "New todo"]);
};


const addCustomTodo = () => {
if (!valid) return;
setTasks([...tasks, input.trim()]);
setInput("");
};


return (
<div style={{ padding: "20px" }}>
<h1>React App</h1>


<button onClick={addNewTodo}>Add Todo</button>
<br /><br />


<input
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder="Enter custom task"
/>
<button onClick={addCustomTodo} disabled={!valid}>Submit</button>


<h3>Todos:</h3>
<ul>
{tasks.map((t, i) => (
<li key={i}>{t}</li>
))}
</ul>


<button onClick={() => setCounter(counter + 1)}>Increment</button>
<p>Counter: {counter}</p>


<ReactMemo count={counter} />
<UseMemoExample tasks={tasks} />
</div>
);
}
