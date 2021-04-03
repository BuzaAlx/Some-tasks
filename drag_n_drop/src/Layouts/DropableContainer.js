import React from "react";

function DropableContainer({ title, bg, ref, children }) {
  return (
    <div className={`col-5 border m-2 ${bg}`}>
      <div className="bg-primary row text-white">
        <div className="col font-weight-bold p-2">{title}</div>
      </div>
      <ul className="list-group py-2 h-100" ref={ref}>
        {children}
      </ul>
    </div>
  );
}

export default DropableContainer;
