import imageArray from "./ImageStorage";

export default function RightPane({ title, date, articleContent }) {
  return (
    <>
      <div className="w-7/12 bg-gray-300 flex flex-col min-h-screen p-7">
        <div className="bg-white min-h-full px-4 py-8 rounded-lg shadow-lg p-6 font-inherit">
          <p className="text-3xl font-bold mb-4">{title}</p>
          <p className="text-gray-700 mb-4 italic">{date}</p>
          <div className="flex justify-center items-center">
            <img src={imageArray[0]} alt="" className="max-w-full" />
          </div>
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
