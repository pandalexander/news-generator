export default function RightPane({ title, date }) {
  return (
    <>
      <div className="w-2/3 bg-gray-300">
        <p>{title}</p>
        <p>{date}</p>
      </div>
    </>
  );
}
