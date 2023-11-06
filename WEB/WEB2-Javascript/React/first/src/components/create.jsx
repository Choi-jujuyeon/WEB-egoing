const Create = (props) => {
    return (
        <article>
            <h2>Create</h2>

            {/* form 태그- 페이지 리로딩 안되도록 설정 */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const title = e.target.title.value;
                    const body = e.target.body.value;
                    // console.log(title);

                    props.onCreate(title, body);
                }}
            >
                <p>
                    <input type="text" name="title" placeholder="title" />
                </p>
                <p>
                    <textarea name="body" placeholder="body"></textarea>
                </p>
                <p>
                    <input type="submit" value="Create" />
                </p>
            </form>
        </article>
    );
};
export default Create;
