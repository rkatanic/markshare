"use client";

import { usePathname, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const ShareLink = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleShare = (): void => {
    const params = new URLSearchParams(searchParams);
    params.set("m", "preview");
    const cleanUrl = `${
      window.location.origin
    }${pathname}?${params.toString()}`;

    navigator.clipboard.writeText(cleanUrl).then(() => {
      toast(
        (t: { id: string | undefined }) => (
          <div className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 text-teal-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <div className="flex-1 flex gap-6">
              <div className="space-y-1">
                <b className="font-medium text-zinc-200">
                  URL copied to clipboard!
                </b>
                <p className="text-zinc-300 text-sm">
                  Note: If you edit markdown you will need to share a new link.
                </p>
              </div>
              <button
                onClick={() => toast.dismiss(t.id)}
                className="rounded-md py-2 px-4 my-auto h-10 text-sm outline-offset-2 transition active:transition-none bg-zinc-700 font-medium text-zinc-100 hover:bg-zinc-600 active:bg-zinc-600/90 active:text-zinc-100/90"
              >
                Dismiss
              </button>
            </div>
          </div>
        ),
        { id: "toast", duration: 5000 }
      );
    });
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center relative px-3 py-2 transition gap-2"
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
          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
        />
      </svg>
      Share
    </button>
  );
};

export default ShareLink;
