import React from "react";
import Tree from "../components/Tree";
import { treeData } from "../data";

const TreeList = () => {
  return (
    <>
      <div className="row">
        <div className="col text-center">
          <p>
            <div className="row mt-3 d-flex pl-10">
              <div className="col-lg-8 text-left text-light border-left">
                <Tree data={treeData} />
              </div>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default TreeList;
