const Head = (props) => {
    console.log("props", props.title);
    return (
        <header>
            <h1>
                <a href="/">{props.title}</a>
            </h1>
        </header>
    );
};
export default Head;
