import Article from "./components/article";
import Head from "./components/head";
import Nav from "./components/nav";

function App() {
    return (
        <div>
            <Head title="WEB" />
            <Nav />
            <Article title="Welcome" body="Hello, React~!~" />
        </div>
    );
}

export default App;
