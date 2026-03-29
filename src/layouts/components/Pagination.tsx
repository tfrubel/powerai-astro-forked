import React from "react";

const Pagination = ({
  section,
  currentPage,
  totalPages,
}: {
  section: string;
  currentPage: number;
  totalPages: number;
}) => {
  const indexPageLink = currentPage === 2;
  const hasPrevPage = currentPage > 1;
  const hasNextPage = totalPages > currentPage;

  const pageList = [];
  for (let i = 1; i <= totalPages; i++) {
    pageList.push(i);
  }

  return (
    <>
      {totalPages > 1 && (
        <nav
          className="flex items-center justify-center space-x-2 border border-border/6 rounded-full w-max mx-auto overflow-hidden"
          aria-label="Pagination"
        >
          {/* previous */}
          {hasPrevPage ? (
            <a
              href={
                indexPageLink
                  ? `${section ? "/" + section : "/"}`
                  : `${section ? "/" + section : ""}/page/${currentPage - 1}`
              }
              className=" size-10  flex items-center justify-center text-text hover:bg-light duration-300 hover:text-text-dark  border-r border-border/6"
            >
              <span className="sr-only">Previous</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_35_10935)">
                  <path
                    d="M16.875 10H3.125M3.125 10L8.75 4.375M3.125 10L8.75 15.625"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_35_10935">
                    <rect width="20" height="20" fill="currentColor" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          ) : (
            <span className=" size-10  flex items-center justify-center text-gray border-r border-border/6">
              <span className="sr-only">Previous</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_35_10935)">
                  <path
                    d="M16.875 10H3.125M3.125 10L8.75 4.375M3.125 10L8.75 15.625"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_35_10935">
                    <rect width="20" height="20" fill="currentColor" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          )}

          {/* page index */}
          {pageList.map((pagination, i) => (
            <React.Fragment key={`page-${i}`}>
              {pagination === currentPage ? (
                <span
                  aria-current="page"
                  className="rounded-full bg-gradient-primary size-10  flex items-center justify-center text-text-light  "
                >
                  {pagination}
                </span>
              ) : (
                <a
                  href={
                    i === 0
                      ? `${section ? "/" + section : "/"}`
                      : `${section ? "/" + section : ""}/page/${pagination}`
                  }
                 
                  aria-current="page"
                  className="rounded-full size-10  flex items-center justify-center text-text hover:bg-light duration-300 hover:text-text-dark  "
                >
                  {pagination}
                </a>
              )}
            </React.Fragment>
          ))}

          {/* next page */}
          {hasNextPage ? (
            <a
              href={`${section ? "/" + section : ""}/page/${currentPage + 1}`}
              className=" size-10  flex items-center justify-center text-text hover:bg-light duration-300 hover:text-text-dark  border-l border-border/6"
            >
              <span className="sr-only">Next</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_35_10946)">
                  <path
                    d="M3.125 10H16.875M16.875 10L11.25 4.375M16.875 10L11.25 15.625"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_35_10946">
                    <rect width="20" height="20" fill="currentColor" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          ) : (
            <span className=" size-10  flex items-center justify-center text-gray border-l border-border/6">
              <span className="sr-only">Next</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_35_10946)">
                  <path
                    d="M3.125 10H16.875M16.875 10L11.25 4.375M16.875 10L11.25 15.625"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_35_10946">
                    <rect width="20" height="20" fill="currentColor" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          )}
        </nav>
      )}
    </>
  );
};

export default Pagination;
