import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }:Readonly<{
  children: React.ReactNode;
}>) => {
    return (
        <div className="h-full">
            <Header />
            <main className="max-w-screen-lg m-auto py-40">
                { children }
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;