// import { useState } from "react";
import { useState } from "react";
// import { imageArray } from "./ImageStorage";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

export default function TwoPaneView() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [articleContent, setArticleContent] = useState("");
  const [imageIndex, setImageIndex] = useState(0);

  function handleTitleValueChange(e) {
    setTitle(e.target.value);
  }

  function handleDateValueChange(e) {
    setDate(e.target.value);
  }

  function handleArticleValueChange(e) {
    setArticleContent(e.target.value);
  }

  function handleImageChange(e) {
    setImageIndex(e.target.value);
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
          onImageChange={handleImageChange}
        />

        {/* Right Pane */}
        <RightPane
          title={title}
          date={date}
          articleContent={articleContent}
          imageIndex={imageIndex}
        />
      </div>
    </>
  );
}
