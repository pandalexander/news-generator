export default function LeftPane({ title, onChange }) {
  return (
    <>
      <div className="w-1/3 bg-gray-200">
        <h2></h2>
        <label htmlFor="input">Title: </label>
        <input value={title} onChange={onChange}></input>
      </div>
    </>
  );
}
