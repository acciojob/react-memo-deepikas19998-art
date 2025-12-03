import React from "react";


function ReactMemo({ count }) {
return (
<div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "15px" }}>
<h2>React.memo Component</h2>
<p>Counter Value: {count}</p>
</div>
);
}


export default React.memo(ReactMemo);
