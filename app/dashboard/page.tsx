"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { FC } from "react";

interface User {
  name: string;
  email: string;
}

const Dashboard: FC = () => {
  const { user } = useAuth();
  const { name, email } = user;

  return (
    <section className="container mx-auto min-h-screen flex justify-center items-center">
      <UserCard name={name || "Unknown"} email={email || "Unknown"} />
    </section>
  );
};

interface UserCardProps {
  name: string;
  email: string;
}

const UserCard: FC<UserCardProps> = ({ name, email }) => (
  <Card className="mx-auto max-w-sm">
    <CardHeader className="space-y-1">
      <CardTitle className="text-2xl font-bold">Dashboard</CardTitle>
      <CardDescription>
        Welcome to your dashboard. Here is your account information.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        <h1 className="text-lg font-medium">Welcome, {name}!</h1>
        <p className="text-sm text-gray-600">Email: {email}</p>
      </div>
    </CardContent>
  </Card>
);

export default Dashboard;
