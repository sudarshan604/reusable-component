import React from "react";

interface QuoteProps {
  by: string;
  source: string;
  children: React.ReactNode;
}

const Quote = ({ by, source, children }: QuoteProps) => {
  return (
    <figure>
      <blockquote
        className={`m-0 bg-gray-400 py-4 px-5 rounded-lg italic before:content-['"'] after:content-['"']`}
      >
        {children}
      </blockquote>
      <cite className="block text-right mt-2 ">
        <a href={source} className="text-gray-700">
          {by}
        </a>
      </cite>
    </figure>
  );
};

export default Quote;
