import Article from "./components/article";
import Head from "./components/head";
import Nav from "./components/nav";

function App() {
    const topics = [
        { id: 1, title: "html", body: "html is ..." },
        { id: 2, title: "css", body: "css is ..." },
        { id: 3, title: "javascript", body: "javascript is ..." },
    ];

    return (
        <div>
            <Head
                title="WEB"
                onChangeMode={() => {
                    alert("Header");
                }}
            />
            <Nav topics={topics} />
            <Article title="Welcome" body="Hello, React~!~" />
        </div>
    );
}

export default App;
