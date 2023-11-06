import Article from "./components/article";
import Create from "./components/create";
import Head from "./components/head";
import Nav from "./components/nav";
import { useState } from "react";

function App() {
    // mode의 상태로 업그레이드 시켜줘야 함.
    // const mode = "READ";
    const [mode, setMode] = useState("WELCOME");
    const [id, setId] = useState(null);
    const [nextId, setNextId] = useState(4);

    const [topics, setTopics] = useState([
        { id: 1, title: "html", body: "html is ..." },
        { id: 2, title: "css", body: "css is ..." },
        { id: 3, title: "javascript", body: "javascript is ..." },
    ]);

    let content = null;
    if (mode === "WELCOME") {
        content = <Article title="Welcome" body="Hello, WEB" />;
    } else if (mode === "READ") {
        // id와 일치하는 원소를 찾아서, title과 body 값으로 설정
        let title,
            body = null;

        for (let i = 0; i < topics.length; i++) {
            console.log(topics[i].id, id);
            if (topics[i].id === id) {
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        content = <Article title={title} body={body} />;
    } else if (mode === "CREATE") {
        content = (
            <Create
                onCreate={(_title, _body) => {
                    const newTopic = {
                        id: nextId,
                        title: _title,
                        body: _body,
                    };
                    const newTopics = [...topics];
                    newTopics.push(newTopic);
                    setTopics(newTopics);
                    setMode("READ");
                    setId(nextId);
                    setNextId(nextId + 1);
                }}
            />
        );
    }

    return (
        <div>
            <Head
                title="WEB"
                onChangeMode={() => {
                    // alert("Header");
                    setMode("WELCOME");
                }}
            />
            <Nav
                topics={topics}
                onChangeMode={(_id) => {
                    alert(_id);
                    setMode("READ");

                    // nav 컴포넌트 id를 클릭했을 떄 상태변경
                    setId(_id);
                }}
            />
            {content}

            {/* CREATE page로 이동 */}
            <a
                href="/create"
                onClick={(e) => {
                    e.preventDefault();
                    setMode("CREATE");
                }}
            >
                Create
            </a>
        </div>
    );
}

export default App;
