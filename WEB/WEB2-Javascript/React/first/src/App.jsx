import Article from "./components/article";
import Head from "./components/head";
import Nav from "./components/nav";

function App() {
    const mode = "READ";

    const topics = [
        { id: 1, title: "html", body: "html is ..." },
        { id: 2, title: "css", body: "css is ..." },
        { id: 3, title: "javascript", body: "javascript is ..." },
    ];

    let content = null;
    if (mode === "WELCOME") {
        content = <Article title="Welcome" body="Hello, WEB" />;
    } else if (mode === "READ") {
        content = <Article title="Read" body="Hello, Read" />;
    }

    return (
        <div>
            <Head
                title="WEB"
                onChangeMode={() => {
                    alert("Header");
                }}
            />
            <Nav
                topics={topics}
                onChangeMode={(id) => {
                    alert(id);
                }}
            />
            {content}
        </div>
    );
}

export default App;
