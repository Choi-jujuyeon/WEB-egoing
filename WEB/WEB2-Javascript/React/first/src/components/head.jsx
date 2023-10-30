const Head = (props) => {
    console.log("props", props.title);
    return (
        <header>
            <h1>
                <a
                    href="/"
                    onClick={(event) => {
                        // event.preventDefault();
                        props.onChangeMode();
                    }}
                >
                    {props.title}
                </a>
            </h1>
        </header>
    );
};
export default Head;
