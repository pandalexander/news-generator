import { imageArray } from "./ImageStorage";

function SocialIcons({ imageIndexCheck }) {
  if (imageIndexCheck == 0) {
    return null;
  } else {
    return (
      <div className="flex gap-3 justify-start items-center mb-3 -ml-1">
        {" "}
        {/* <!-- Facebook --> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 -mr-1 cursor-pointer"
          fill="#111827"
          viewBox="0 0 24 24"
        >
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
        {/* <!-- Instagram --> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 cursor-pointer"
          fill="#111827"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
        {/* <!-- Telegram --> */}
        <svg
          className="h-5 w-5 cursor-pointer"
          fill="#111827"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlSpace="preserve"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.41421",
          }}
        >
          <path
            id="telegram-1"
            d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
          />
        </svg>
        {/* <!-- Youtube --> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 cursor-pointer"
          fill="#111827"
          viewBox="0 0 24 24"
        >
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      </div>
    );
  }
}

export default function RightPane({ title, date, articleContent, imageIndex }) {
  return (
    <>
      <div className="sm:w-full lg:w-2/5 bg-gray-300 flex flex-col min-h-screen p-7">
        <div className="bg-white min-h-full rounded-lg shadow-lg font-inherit">
          <header className="bg-gray-900 py-4 px-6 rounded-t-lg">
            <div className="flex justify-between items-center">
              <h1 className="text-white text-xl font-bold cursor-pointer">
                The Trying Times
              </h1>
              <ul className="hidden md:flex text-white">
                <li className="ml-4 hover:text-gray-300 cursor-pointer">US</li>
                <li className="ml-4 hover:text-gray-300 cursor-pointer">
                  Politics
                </li>
                <li className="ml-4 hover:text-gray-300 cursor-pointer">
                  Business
                </li>
                <li className="ml-4 hover:text-gray-300 cursor-pointer">
                  Opinion...
                </li>
              </ul>
            </div>
          </header>

          <div className="px-4 py-8">
            <p className="text-3xl font-bold mb-4 text-gray-900">{title}</p>
            <p className="text-gray-700 mb-4 italic">{date}</p>
            <SocialIcons imageIndexCheck={imageIndex} />
            <img
              src={imageArray[imageIndex].value}
              alt=""
              className="mx-auto max-w-full h-auto mb-4"
            />
            <pre
              style={{ fontFamily: "Playfair Display" }}
              className="text-lg leading-relaxed max-w-full overflow-auto whitespace-pre-wrap text-gray-900"
            >
              {articleContent}
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}
