import Footer from "./Footer";
import Nav from "./Nav";

export default function Main({children}) {
    return (
        <>
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <Nav />
                <div className="container-fluid py-4">
                    {children}
                    <Footer />
                </div>
            </main>

        </>
    );
}