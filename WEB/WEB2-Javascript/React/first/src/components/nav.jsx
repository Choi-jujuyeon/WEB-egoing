const Nav = (props) => {
    const lis = [];

    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        lis.push(
            // key-prop
            <li key={t.id}>
                <a href={"/read/" + t.id}>{t.title}</a>
            </li>
        );
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
