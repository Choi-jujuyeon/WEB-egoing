const Nav = (props) => {
    const lis = [];

    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        lis.push(<li>{t.title}</li>);
    }
    return (
        <nav>
            <ol>
                {/* 원소들을 하나씩 꺼내어 배치시킴 */}
                {lis}
            </ol>
        </nav>
    );
};
export default Nav;
