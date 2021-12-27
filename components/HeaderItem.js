import React from "react";

function HeaderItem({ title, Icon }) {
  return (
    <div className="cursor-pointer group flex flex-col items-center mt-5 w-12 sm:w-20 hover:text-[#FDD69E]">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="transition ease-in-out  opacity-0 group-hover:opacity-100 tracking-widest uppercase font-bold">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
