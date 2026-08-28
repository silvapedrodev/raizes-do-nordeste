"use client"

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  content: string
  tableOfContents: string[]
}

export const PolicyContent = ({ content, tableOfContents }: Props) => {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="flex flex-col md:flex-row md:gap-20">
      <aside className="lg:col-span-1 my-8 md:order-2">
        <div className="max-h-112 overflow-y-auto bg-card border rounded-lg px-4 py-5 shadow-[1px_1px_8px_rgba(0,0,0,0.10)]">
          <h3 className="font-semibold text-black mb-5 text-sm uppercase tracking-wider">
            Sumário
          </h3>
          <ul className="space-y-2 text-black">
            {tableOfContents.map((title, index) => {
              const id = title.toLowerCase().replace(/[^\w]+/g, '-')
              const number = index + 1

              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(id)}
                    className="hover:text-primary-main text-left transition-colors flex gap-1.5 w-full cursor-pointer bg-transparent border-none p-0"
                  >
                    <span className="font-medium">{number}.</span>
                    <span className="line-clamp-1 font-medium">{title}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div >
      </aside >

      <main className="flex-1 mt-8 markdown-body">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children, ...props }) => {
              const textContent = String(children)
              const id = textContent.toLowerCase().replace(/[^\w]+/g, '-')
              return (
                <h1
                  id={id}
                  className="mt-0 text-2xl font-bold text-primary-main mb-4 scroll-mt-24"
                  {...props}
                >
                  {children}
                </h1>
              )
            },

            p: ({ children }) =>
              <p className="mb-4 leading-relaxed text-sm text-justify text-gray-500">
                {children}
              </p>,
            strong: ({ children }) =>
              <strong className="font-semibold text-gray-600">
                {children}
              </strong>,

            ul: ({ children }) =>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm text-gray-600">
                {children}
              </ul>,
            ol: ({ children }) =>
              <ol className="list-decimal list-inside mb-4 space-y-1 text-sm text-gray-600">
                {children}
              </ol>,
            li: ({ children }) => <li className="leading-relaxed">{children}</li>,

            hr: () => <hr className="my-5 border-t border-gray-200 dark:border-gray-800" />
          }}
        >
          {content}
        </ReactMarkdown>
      </main>
    </div >
  );
}