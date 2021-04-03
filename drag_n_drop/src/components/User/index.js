import React from "react";
import { useDrag } from "react-dnd";

const User = ({
  name,
  age,
  nationality,
  photo,
  index,
  playerType,
  onDropPlayer,
}) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: playerType,
    item: {
      type: playerType,
      index,
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (item && dropResult) {
        onDropPlayer(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  let basd = isDragging ? "fade-anim isDragging" : "fade-anim";

  return (
    <li className={`list-group-item my-1 p-2 ${basd}`} ref={dragRef}>
      <div className="card border-0">
        <div className="row no-gutters">
          <div className="col-md-1">
            <img
              src={photo}
              className="img-thumbnail border-secondary rounded-circle"
            />
          </div>
          <div className="col-md-9">
            <div className="card-body py-1 px-2 text-left">
              <h5 className="card-title d-inline">{name}</h5>
              <p className="card-text d-inline">, {nationality}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default User;
