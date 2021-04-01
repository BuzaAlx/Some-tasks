import React, { useEffect } from "react";
import TableRow from "../components/TableRow";
import AddNewRow from "../components/AddNewRow";
import { useDispatch, useSelector } from "react-redux";
import { getUsersThunk } from "../redux/reducer";
import { Table as BootstrapTable } from "react-bootstrap";
import { Container } from "react-bootstrap/";

function Table() {
  const { users, isLoading } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  return (
    <div>
      <h3> Table</h3>
      <Container>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <BootstrapTable striped bordered hover size="sm">
            <thead>
              <tr>
                <th>id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <AddNewRow />
              {users.map((user) => {
                return <TableRow key={user.id} {...user} />;
              })}
            </tbody>
          </BootstrapTable>
        )}
      </Container>
    </div>
  );
}

export default Table;
