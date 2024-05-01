// import { useState } from "react";
import { useState } from "react";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

export default function TwoPaneView() {
  const [title, setTitle] = useState("");

  function handleTitleValueChange(e) {
    setTitle(e.target.value);
  }
  return (
    <>
      <div className="flex h-screen">
        {/* Left Pane */}
        <LeftPane title={title} onChange={handleTitleValueChange} />

        {/* Right Pane */}
        <RightPane title={title} />
      </div>
    </>
  );
}
