"use client";

import { Suspense, useState } from "react";
import { decodeContent, encodeContent } from "./utils/utils";
import { useQueryState } from "nuqs";
import Markdown from "react-markdown";
import classNames from "classnames";
import ShareLink from "./components/ShareLink";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [content, setContent] = useQueryState("content");
  const [mode, setMode] = useQueryState("m");
  const [markdown, setMarkdown] = useState(decodeContent(content ?? ""));
  const [isEditMode, setIsEditMode] = useState(mode === "edit" ? true : false);

  const onMarkdownChange = (value: string): void => {
    setMarkdown(value);
    const encodedMarkdown = encodeContent(value);
    setContent(encodedMarkdown);
  };

  return (
    <div className="">
      <Toaster
        position="bottom-center"
        toastOptions={{
          className: "!bg-zinc-800 !text-zinc-200",
          style: {
            maxWidth: 420,
          },
        }}
      />
      <div className="flex flex-1 justify-end md:justify-center">
        <nav className="pointer-events-auto hidden md:block fixed top-6 left-1/2 -translate-x-1/2">
          <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur ">
            <li>
              <button
                onClick={() => {
                  setIsEditMode(true);
                  setMode("edit");
                }}
                className={classNames(
                  "flex items-center relative px-3 py-2 transition gap-2",
                  {
                    "before:absolute before:inset-x-1 before:h-px before:bg-gradient-to-r before:-bottom-px before:left-1/2 before:-translate-x-1/2 before:w-full before:from-teal-500/0 before:via-teal-500/40 before:to-teal-500/0 before:dark:from-teal-400/0 before:dark:via-teal-400/40 before:dark:to-teal-400/0":
                      isEditMode,
                    "text-teal-500 dark:text-teal-400": isEditMode,
                  }
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
                Edit
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsEditMode(false);
                  setMode(null);
                }}
                className={classNames(
                  "flex items-center relative px-3 py-2 transition gap-2",
                  {
                    "before:absolute before:inset-x-1 before:h-px before:bg-gradient-to-r before:-bottom-px before:left-1/2 before:-translate-x-1/2 before:w-full before:from-teal-500/0 before:via-teal-500/40 before:to-teal-500/0 before:dark:from-teal-400/0 before:dark:via-teal-400/40 before:dark:to-teal-400/0":
                      !isEditMode,
                    "text-teal-500 dark:text-teal-400": !isEditMode,
                  }
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                Preview
              </button>
            </li>

            <li>
              <Suspense>
                <ShareLink />
              </Suspense>
            </li>
            <li>
              <a
                className="flex items-center relative px-3 py-2 transition gap-2"
                href="/?m=edit"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
                New
              </a>
            </li>
            <li>
              <a
                className="flex items-center relative px-3 py-2 transition gap-2"
                href="/?content=IyMgQWJvdXQKCldlbGNvbWUgdG8gKipNYXJrZG93biBTaGFyZSoqIOKAkyBhIGxpZ2h0d2VpZ2h0IGFuZCBzaW1wbGUgYXBwIGRlc2lnbmVkIHRvIGNyZWF0ZSwgZWRpdCwgYW5kIHNoYXJlIG1hcmtkb3duIGNvbnRlbnQgZWZmb3J0bGVzc2x5LgpNYWRlIGJ5IFtya2F0YW5pY10oaHR0cHM6Ly9naXRodWIuY29tL3JrYXRhbmljKS4KCiMjIyBLZXkgRmVhdHVyZXMKCi0gKipFZGl0IE1hcmtkb3duIHdpdGggRWFzZSoqOiBBIHNpbXBsZSBtYXJrZG93biBlZGl0b3IgdG8gY29tcG9zZSBhbmQgcHJldmlldyB5b3VyIGNvbnRlbnQgaW4gcmVhbC10aW1lLgotICoqVVJMLUJhc2VkIFNoYXJpbmcqKjogWW91ciBjb250ZW50IGlzIGVuY29kZWQgZGlyZWN0bHkgaW50byB0aGUgVVJMLCBtYWtpbmcgc2hhcmluZyBzZWFtbGVzcyBhbmQgcHJpdmF0ZS4KCiMjIyBIb3cgSXQgV29ya3MKCjEuIFdyaXRlIHlvdXIgbWFya2Rvd24gY29udGVudCBpbiB0aGUgZWRpdG9yLgoyLiBUaGUgYXBwIGVuY29kZXMgeW91ciBjb250ZW50IGludG8gdGhlIFVSTCBkeW5hbWljYWxseS4KMy4gU2hhcmUgdGhlIFVSTCB3aXRoIGFueW9uZSB0byBsZXQgdGhlbSB2aWV3IG9yIGVkaXQgdGhlIGNvbnRlbnQuCgojIyMgV2h5IHRoaXM/CgpNYXJrZG93biBTaGFyZSBpcyBidWlsdCBmb3IgKipkZXZlbG9wZXJzLCB3cml0ZXJzLCBhbmQgY29sbGFib3JhdG9ycyoqIHdobyB2YWx1ZSBzaW1wbGljaXR5LCBwcml2YWN5LCBhbmQgZWZmaWNpZW5jeS4gV2hldGhlciBpdCdzIHNoYXJpbmcgYSBxdWljayBub3RlLCBhIHRlY2huaWNhbCBkb2N1bWVudCwgb3IgZHJhZnQgY29udGVudCwgTWFya2Rvd24gU2hhcmUga2VlcHMgaXQgZmFzdCBhbmQgc2VjdXJlLgoKLS0tCgoqKkJ1aWx0IHdpdGgg4p2k77iPIGFuZCBzaW1wbGljaXR5IGluIG1pbmQuKioK"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {isEditMode ? (
        <textarea
          className="outline-none border-none flex-1 w-full mx-auto min-h-screen p-8 py-24 resize-none block font-mono"
          style={{
            paddingLeft: "calc((100vw - 608px) / 2)",
            paddingRight: "calc((100vw - 608px) / 2)",
          }}
          name="markdown"
          id="markdown"
          placeholder="Write your markdown here..."
          value={markdown}
          onChange={(e) => onMarkdownChange(e.target.value)}
        />
      ) : (
        <Markdown className="prose p-8 w-full max-w-2xl !flex-1 sm:prose-lg py-24 mx-auto prose-headings:tracking-tight prose-h1:font-bold prose-h1:tracking-tight">
          {markdown ? markdown : "Nothing to preview yet."}
        </Markdown>
      )}
    </div>
  );
}
