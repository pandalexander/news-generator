// import { useState } from "react";
import { useState } from "react";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

export default function TwoPaneView() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  function handleTitleValueChange(e) {
    setTitle(e.target.value);
  }

  function handleDateValueChange(e) {
    setDate(e.target.value);
  }
  return (
    <>
      <div className="flex h-screen">
        {/* Left Pane */}
        <LeftPane
          title={title}
          onTitleChange={handleTitleValueChange}
          date={date}
          onDateChange={handleDateValueChange}
        />

        {/* Right Pane */}
        <RightPane title={title} date={date} />
      </div>
    </>
  );
}
