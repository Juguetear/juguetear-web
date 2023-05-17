import React from "react";

export const CardSkeleton = () => {
  return (
    <div
      data-testid="card-skeleton"
      className="m-4 max-w-xs animate-pulse space-y-4 rounded border border-gray p-6"
    >
      <div
        data-testid="card-skeleton-rect"
        className="h-10 w-2/3 bg-gray-light pb-2 font-bold "
      ></div>
      <div
        data-testid="card-skeleton-rect"
        className="border-b border-gray-light"
      ></div>
      <div
        data-testid="card-skeleton-rect"
        className="h-40 rounded bg-gray-light"
      ></div>
      <div
        data-testid="card-skeleton-rect"
        className="h-6 w-1/2 bg-gray-light"
      ></div>
      <div
        data-testid="card-skeleton-rect"
        className="h-16 bg-gray-light"
      ></div>
      <div
        data-testid="card-skeleton-rect"
        className="mt-4 h-12 w-3/4 rounded bg-gray-light"
      ></div>
    </div>
  );
};
