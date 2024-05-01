export default function LeftPane({ title, onTitleChange, date, onDateChange }) {
  return (
    <>
      <div className="w-1/3 bg-gray-200">
        <label htmlFor="input">Title: </label>
        <input value={title} onChange={onTitleChange}></input>

        <label htmlFor="input">Date: </label>
        <input value={date} onChange={onDateChange}></input>
      </div>
    </>
  );
}
