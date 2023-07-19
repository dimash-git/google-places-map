import React from "react";

const ShimmerItem = () => {
  return (
    <div className="rounded-md p-3 max-w-lg w-full mt-3">
      <div className="animate-pulse flex items-center space-x-4">
        <div className="rounded-2xl bg-slate-200 h-[100px] w-[100px]"></div>
        <div className="flex-1 space-y-3 py-1">
          <div className="h-5 bg-slate-200 rounded"></div>
          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-2 max-w-[16rem]">
              <div className="h-4 bg-slate-200 col-span-2 rounded"></div>
              <div className="h-4 bg-slate-200 col-span-1 rounded"></div>
            </div>
            <div className="h-4 bg-slate-200 max-w-[4rem] rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerItem;
