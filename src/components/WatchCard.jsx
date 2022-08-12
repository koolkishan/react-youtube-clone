import React from "react";

export default function WatchCard() {
  return (
    <div className="flex gap-3">
      <div className="min-w-fit">
        <a href="">
          <img
            src="https://i.ytimg.com/vi/CTwK8QW43sU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmVhg1i_KLLYovL2E08Md7GJETVQ"
            alt=""
            className="h-24 w-40"
          />
        </a>
      </div>
      <div className="flex gap-1 flex-col">
        <h4 className="text-sm">
          <a href="" className="line-clamp-2">
            <strong>
              Build and Deploy a Modern Web 3.0 Blockchain App | Solidity, Smart
              Contracts, Crypto
            </strong>
          </a>
        </h4>
        <div className="text-xs text-gray-400	">
          <div>
            <a href="" className="hover:text-white">
              Javascript Mastery
            </a>
          </div>
          <div>
            <div>
              <span className="after:content-['•'] after:mx-1">1M views</span>
              <span>5 months ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
