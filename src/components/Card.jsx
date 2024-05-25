import React, { useState } from "react";

export default function Card({ onSuspended, id, firstName, lastName, img }) {
  const [suspended, setSuspended] = useState(false);
  const Cardsuspended = () => {
    setSuspended(!suspended);
    onSuspended(id, !suspended);
  };

  return (
    <div className="" onClick={Cardsuspended}>
      {suspended !== true ? (
        <div className="cursor-pointer rounded-xl bg-slate-400 p-7">
          <div className="flex justify-center ">
            <img src={img} className="rounded-full" />
          </div>

          <div className="flex justify-center p-3">
            <p className="">
              {firstName} {lastName}
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-slate-500 cursor-pointer rounded-xl p-7">
          <div className="flex justify-center">
            <img src={img} className="rounded-full" />
          </div>

          <div className="flex justify-center p-3">
            <p>Suspendida</p>
          </div>
        </div>
      )}
    </div>
  );
}
