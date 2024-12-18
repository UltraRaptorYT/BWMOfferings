import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main className="fullHeight flex w-full">
      <div className="grow w-full">
        <Outlet />
      </div>
    </main>
  );
}

export default Layout;
