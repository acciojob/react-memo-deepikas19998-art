import React, { useMemo } from "react";


export default function UseMemoExample({ tasks }) {
const calculation = useMemo(() => {
return tasks.length * 1000;
}, [tasks.length]);


return (
<div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "15px" }}>
<h2>useMemo Output</h2>
<p>Computed Value: {calculation}</p>
</div>
);
}
