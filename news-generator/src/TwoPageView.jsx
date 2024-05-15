// import { useState } from "react";
import { useState } from "react";
// import { imageArray } from "./ImageStorage";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

export default function TwoPaneView() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [articleContent, setArticleContent] = useState("");

  function handleTitleValueChange(e) {
    setTitle(e.target.value);
  }

  function handleDateValueChange(e) {
    setDate(e.target.value);
  }

  function handleArticleValueChange(e) {
    setArticleContent(e.target.value);
  }

  return (
    <>
      <div className="flex min-h-screen">
        {/* Left Pane */}
        <LeftPane
          title={title}
          onTitleChange={handleTitleValueChange}
          date={date}
          onDateChange={handleDateValueChange}
          articleContent={articleContent}
          onArticleContentChange={handleArticleValueChange}
        />

        {/* Right Pane */}
        <RightPane title={title} date={date} articleContent={articleContent} />
      </div>
    </>
  );
}
