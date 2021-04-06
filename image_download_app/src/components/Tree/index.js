import React, { useState, useContext } from "react";
import "./index.css";
import { Context } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Tree = ({ data = [] }) => {
  return (
    <div className="d-tree">
      <ul className="d-flex d-tree-container flex-column">
        {data.map((tree) => {
          return <TreeNode node={tree} />;
        })}
      </ul>
    </div>
  );
};

const TreeNode = ({ node }) => {
  let { selectedImg, setSelectedImg } = useContext(Context);
  console.log(node.icon);
  const [childVisible, setChildVisiblity] = useState(false);

  const hasChild = node.children ? true : false;

  const handleClick = (tree) => {
    if (!tree.type) return;
    console.log(tree);

    let obj = {
      name: tree.name,
      thumb: tree.thumb,
      file: tree.file,
      filename: tree.label,
    };

    setSelectedImg(obj);
  };

  return (
    <li
      className="d-tree-node border-1 border-light"
      onClick={() => handleClick(node)}
    >
      <div className="d-flex" onClick={(e) => setChildVisiblity((v) => !v)}>
        {hasChild && (
          <span
            className={`d-inline d-tree-toggler ${
              childVisible ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
        )}

        <div className="col d-tree-head d-flex">
          {/* <i className={`mr-1 ${node.icon}`}> </i> */}
          <FontAwesomeIcon icon={node.icon} />
          {/* <FontAwesomeIcon icon="file-image" /> */}
          <span className="pl-2">{node.label}</span>
        </div>
      </div>

      {hasChild && childVisible && (
        <div className="d-tree-content">
          <ul className="d-flex d-tree-container flex-column">
            <Tree data={node.children} />
          </ul>
        </div>
      )}
    </li>
  );
};

export default Tree;
