import React from 'react'

export default function Button({prevUrl,handleClickP,titlePrev, nextUrl, titleNext, handleClickN }) {
  return (
    <>
      <div>
        {prevUrl && (
          <button
            className=" bg-slate-800 hover:bg-red-600 px-16 py-5 rounded-md"
            onClick={handleClickP}
          >
            {titlePrev}
          </button>
        )}
      </div>

      <div>
        {nextUrl && (
          <button
            className="bg-slate-800 hover:bg-red-600 px-16 py-5 lg:ml-5 rounded-md"
            onClick={handleClickN}
          >
            {titleNext}
          </button>
        )}
      </div>
    </>
  );
}
