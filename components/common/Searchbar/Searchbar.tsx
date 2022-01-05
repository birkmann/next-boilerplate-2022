import React from 'react'

const Searchbar = () => {
  return (
    <div className="p-2 bg-gray-100 rounded-full w-[180px] z-10 hidden lg:flex text-sm">
      <button aria-label="Searh">
        <svg fill="#111" height="24" width="24" viewBox="0 0 24 24">
          <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"></path>
        </svg>
      </button>
      <input
        type="text"
        placeholder="Suchen"
        className="w-full ml-4 placeholder-gray-400 bg-transparent appearance-none focus:outline-none"
      />
    </div>
  )
}

export default Searchbar
