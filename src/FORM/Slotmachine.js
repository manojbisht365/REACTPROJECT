import { useState } from "react";

// export default function slotmachine() {
//   return (
//     <div>
//       <h1 className="header_style">
//         🎰 welcome to <span style={{fontWeight:"bold"}}>🎰 Slot machine game</span>
//       </h1>
//     </div>
//   );
// }
function Slotmachine() {
  const [data, setstate] = useState("manoj");
  function updateData() {
    setstate("manoj singh");
  }
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={updateData}>update data</button>
    </div>
  );
}
export default Slotmachine;
