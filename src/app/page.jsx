import React from "react";
import Users from "../../components/Users";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  console.log(data.data);
  return data.data;
}

async function IndexPage() {
  const users = await fetchUsers();
  console.log(users);

  return (
    <>
    <div>
    <h1> Index Page </h1>
      <Users users={users} />
    </div>
      
    </>
  );
}

export default IndexPage;

// react server component
// link video => https://www.youtube.com/watch?v=H_s-xM6Ii1g&ab_channel=FaztCode
