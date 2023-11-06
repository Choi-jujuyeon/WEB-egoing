import Link from "next/link";
import "./globals.css";

export const metadata = {
    title: "Web Tutoials",
    description: "Generated by JuYEON",
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <Link href="/">
                    <h1>WEB</h1>
                </Link>
                <ol>
                    <li>
                        <Link href="/read/1">html</Link>
                    </li>
                    <li>
                        <Link href="/read/2">css</Link>
                    </li>
                </ol>
                {children}
                <ul>
                    <li>
                        <Link href="/create">CREATE</Link>
                    </li>
                    <li>
                        <Link href="/update/1">Update</Link>
                    </li>
                    <li>
                        <input type="button" value="Delete"></input>
                    </li>
                </ul>
            </body>
        </html>
    );
}
