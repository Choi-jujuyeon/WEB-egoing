import { useState } from "react";
const Update = (props) => {
    // props 를 state로 상태변경
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);
    return (
        <article>
            <h2>Update</h2>

            {/* form 태그- 페이지 리로딩 안되도록 설정 */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const title = e.target.title.value;
                    const body = e.target.body.value;
                    // console.log(title);

                    props.onUpdate(title, body);
                }}
            >
                <p>
                    <input
                        type="text"
                        name="title"
                        placeholder="title"
                        value={title}
                        // 키보드를 입력할 때마다 새로운 값
                        onChange={(e) => {
                            // console.log(e.target.value);
                            //
                            setTitle(e.target.value);
                        }}
                    />
                </p>
                <p>
                    <textarea
                        name="body"
                        placeholder="body"
                        value={body}
                        onChange={(e) => {
                            setBody(e.target.value);
                        }}
                    ></textarea>
                </p>
                <p>
                    <input type="submit" value="Update" />
                </p>
            </form>
        </article>
    );
};
export default Update;
