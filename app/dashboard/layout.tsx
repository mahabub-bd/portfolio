"use client";
import SideMenu from "@/components/admin-dashboard/SideMenu";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user?.token) {
      router.push("/auth/login");
    }
  }, [user, router]);

  return (
    <section>
      <div className="container mx-auto px-4 sm:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-5 md:py-10">
          <div className="lg:col-span-8 2xl:col-span-9 order-2 lg:order-1">
            {children}
          </div>
          <div className="lg:col-span-4 2xl:col-span-3 order-1 lg:order-2 mb-6 lg:mb-0">
            <SideMenu />
          </div>
        </div>
      </div>
    </section>
  );
}
