export default function RightPane({ title, date, articleContent }) {
  return (
    <>
      <div className="w-2/3 bg-gray-300">
        <p>{title}</p>
        <p>{date}</p>
        <p>{articleContent}</p>
      </div>
    </>
  );
}
