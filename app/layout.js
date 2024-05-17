import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "현주니안의 블로그",
  description: "현주니안의 블로그",
};

export default function Layout({ children }) {
  return (
    <html lang="ko">
      <body>
        <header className="fixed top-0 left-0 right-0 h-24 flex items-center justify-between border-b px-6 bg-white">
          <h1 className="text-2xl md:text-5xl">Hyunjunian</h1>
          <p className="text-xs md:text-base">구독하고 신규 알림을 받아보세요!</p>
        </header>
        <aside className="fixed top-24 left-0 bottom-0 p-6 w-96 border-r bg-white space-y-6">
          <nav>
            <ul className="space-y-3">
              <li><Link href="/">전체</Link></li>
              {["소프트웨어", "투자", "게임", "영상"].map((category) => (
                <li key={category}><Link href={`/?category=${category}`}>{category}</Link></li>
              ))}
            </ul>
          </nav>
          <footer>&copy; {new Date().getFullYear()} 현주니안. 모든 권리 보유</footer>
        </aside>
        <main className="mt-24 ml-96">
          {children}
        </main>
      </body>
    </html>
  );
}
