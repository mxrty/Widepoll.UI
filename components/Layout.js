import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="grid md:grid-cols-5">
        <main className="md:col-start-2 md:col-end-5">{children}</main>
      </div>
    </>
  );
};

export default Layout;
