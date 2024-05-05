export default function RightPane({ title, date, articleContent }) {
  return (
    <>
      <div className="w-2/3 bg-gray-300 flex flex-col min-h-screen p-7">
        <div className="bg-white min-h-full px-4 py-8 rounded-lg shadow-lg p-6 font-inherit">
          <p className="text-3xl font-bold mb-4">{title}</p>
          <p className="text-gray-700 mb-4 italic">{date}</p>
          <pre
            style={{ fontFamily: "Playfair Display" }}
            className="text-lg leading-relaxed max-w-full overflow-auto whitespace-pre-wrap"
          >
            {articleContent}
          </pre>
        </div>
      </div>
    </>
  );
}
