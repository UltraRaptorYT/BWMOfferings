import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <main className="min-h-[100dvh] bg-slate-100 dark:bg-slate-900 flex dark:text-white text-black w-full">
        <div className="grow w-full">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Layout;
