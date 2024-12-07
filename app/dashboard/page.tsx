"use client";
import { useAuth } from "@/hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  console.log(user);

  return <div>{user ? <div>Login</div> : <p>Please log in.</p>}</div>;
};
export default Dashboard;
