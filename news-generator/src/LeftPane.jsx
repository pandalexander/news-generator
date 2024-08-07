import { imageArray } from "./ImageStorage";

function ImageOptions(onImageChange) {
  const arrayDataItems = imageArray.map((item) => (
    <option key={item.key} value={item.key}>
      {item.label}
    </option>
  ));
  return <select onChange={onImageChange}>{arrayDataItems}</select>;
}

export default function LeftPane({
  title,
  onTitleChange,
  date,
  onDateChange,
  articleContent,
  onArticleContentChange,
  onImageChange,
}) {
  return (
    <>
      <div className="sm:w-full lg:w-3/5 bg-gray-200 p-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Create Your Fake News Masterpiece!
        </h1>
        <label htmlFor="input" className="font-semibold block mb-2">
          Title:{" "}
        </label>
        <input
          type="text"
          value={title}
          onChange={onTitleChange}
          placeholder="Researchers Reveal Cats Are Secretly Running the Internet"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
        ></input>

        <label htmlFor="input" className="font-semibold block mb-2">
          Publish Information:{" "}
        </label>
        <input
          type="text"
          value={date}
          onChange={onDateChange}
          placeholder="The Day of Our Lord, 2024 - Richard M. Catty"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
        ></input>

        <label htmlFor="imageOptions" className="font-semibold block mb-2">
          Image:
        </label>
        <div className="mb-4">{ImageOptions(onImageChange)}</div>

        <label htmlFor="textarea" className="font-semibold block mb-2">
          Article Content:{" "}
        </label>
        <textarea
          name="articleContent"
          rows={13}
          cols={40}
          value={articleContent}
          onChange={onArticleContentChange}
          placeholder="In a startling revelation, a team of researchers at the University of Feline Sciences has uncovered evidence suggesting that cats are not only internet sensations but are also the clandestine architects behind its operation..."
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
        />
      </div>
    </>
  );
}
