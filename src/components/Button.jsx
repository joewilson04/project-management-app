import { useState } from "react";

export default function Button({ content, children, ...props }) {
  return (
    <>
      <button
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-stone-200"
        {...props}
      >
        {content}
        {children}
      </button>
    </>
  );
}
