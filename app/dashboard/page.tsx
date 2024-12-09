"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { FC } from "react";

interface User {
  name: string;
  email: string;
}

const Dashboard: FC = () => {
  const { user } = useAuth();
  const { name, email, token } = user || {};

  console.log(`User Name: ${name}, User Email: ${email} , Token :${token}`);

  return (
    <section className="container mx-auto min-h-screen flex justify-center items-center">
      {user ? (
        <UserCard name={name || "Unknown"} email={email || "Unknown"} />
      ) : (
        <LoginPrompt />
      )}
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

const LoginPrompt: FC = () => (
  <div className="text-center flex flex-col gap-5 justify-center items-center">
    <p className="text-lg font-medium">
      Please log in to access your dashboard.
    </p>
    <Link href="/auth/login">
      <Button className="w-full max-w-xs">Login</Button>
    </Link>
  </div>
);

export default Dashboard;
