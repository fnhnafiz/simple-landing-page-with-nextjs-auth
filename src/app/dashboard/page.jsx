import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";

const DashboardPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="flex flex-col items-center justify-center my-24">
      <p className="text-xl">Hi {user?.given_name},this your dashboard</p>
    </div>
  );
};

export default DashboardPage;
