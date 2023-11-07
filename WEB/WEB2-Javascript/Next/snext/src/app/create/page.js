"use client";

import { useRouter } from "next/navigation";

export default function Create() {
    // lastid값으로 리다이렉션 해줄 수 있음
    const router = useRouter();

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                const title = e.target.title.value;
                const body = e.target.body.value;

                const options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ title, body }),
                };

                // 서보와 통신하는 코드 (async-await or then() 사용가능)
                fetch(`http://localhost:9999/topics`, options)
                    .then((res) => res.json())
                    .then((result) => {
                        console.log(result);

                        const lastid = result.id;

                        router.push(`/read/${lastid}`);
                    });
            }}
        >
            <p>
                <input type="text" name="title" placeholder="title"></input>
            </p>
            <p>
                <textarea name="body" placeholder="body"></textarea>
            </p>
            <p>
                <input type="submit" value="create" />
            </p>
        </form>
    );
}
