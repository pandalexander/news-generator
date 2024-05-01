export default function LeftPane({
  title,
  onTitleChange,
  date,
  onDateChange,
  articleContent,
  onArticleContentChange,
}) {
  return (
    <>
      <div className="w-1/3 bg-gray-200">
        <label htmlFor="input">Title: </label>
        <input type="text" value={title} onChange={onTitleChange}></input>

        <label htmlFor="input">Date: </label>
        <input type="text" value={date} onChange={onDateChange}></input>

        <textarea
          name="articleContent"
          rows={4}
          cols={40}
          value={articleContent}
          onChange={onArticleContentChange}
        />
      </div>
    </>
  );
}
