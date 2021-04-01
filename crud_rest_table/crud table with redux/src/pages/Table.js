import React, { useEffect } from "react";
import Row from "../components/TableRow";
import AddNewRow from "../components/AddNewRow";
import { useDispatch, useSelector } from "react-redux";
import { getUsersThunk } from "../redux/reducer";

function Table() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  return (
    <div>
      <h3> Table</h3>
      <table
        cellPadding="10"
        border="1"
        style={{ margin: "0 auto", width: "80%" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#dedede" }}>
            <th style={{ width: "20px" }}>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th style={{ width: "130px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          <AddNewRow />
          {users.map((user) => {
            return <Row key={user.id} {...user} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
