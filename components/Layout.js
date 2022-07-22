import Header from "./Header.tsx";

const Layout = ({ children }) => {
  return (
    <>
      <Header user={{ name: "mxrty" }} />
      <div className="grid md:grid-cols-5">
        <main className="md:col-start-2 md:col-end-5">{children}</main>
      </div>
    </>
  );
};

export default Layout;
