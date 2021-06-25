function UsersList(prop) {
  const userDetail = prop.usersData.map((user, index) => (
    <>
    <div className="card bg-secondary text-white" style={{marginBottom: "10px"}}>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6 sm-12">
            <p>Name : {user.name}</p>
          </div>
          <div className="col-md-6 sm-12">
            <p>Age : {user.age}</p>
          </div>
          <div className="col-md-6 sm-12">
            <p>Gender : {user.gender}</p>
          </div>
          <div className="col-md-6 sm-12">
            <p>Contact : {user.contact}</p>
          </div>
          <div className="col-md-6 sm-12">
            <p>Education : {user.education}</p>
          </div>
          <div className="col-md-6 sm-12">
            <p>Address : {user.address}</p>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-outline-primary" onClick={() => editHandeler(index)} type="button">
              Edit
            </button>
            <button className="btn btn-outline-danger" onClick={() => deleteHandeler(index)} type="button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  ));

  function deleteHandeler(index) {
    prop.usersData.splice(index, 1);
    prop.setUsersData([...prop.usersData]);
  }

  function editHandeler(index) {
    prop.setUserIndex(index);
  }

  return (
    <div className="container">
      <div className="row">{userDetail}</div>
    </div>
  );
}

export default UsersList;