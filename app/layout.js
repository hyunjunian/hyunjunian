import "./globals.css";

export const metadata = {
  title: "현주니안의 블로그",
  description: "현주니안의 블로그",
};

export default function Layout({ children }) {
  return (
    <html lang="ko">
      <body className="mx-auto max-w-xl">
        <header className="flex items-center justify-between space-x-4 px-4 py-2">
          <h1 className="text-2xl sm:text-4xl font-bold italic">Hyunjunian</h1>
          <p className="text-xs sm:text-base">구독하고 신규 알림을 받아보세요!</p>
        </header>
        {children}
        <footer className="px-4 py-2 text-xs sm:text-base text-center">&copy; {new Date().getFullYear()} 현주니안. 모든 권리 보유</footer>
      </body>
    </html>
  );
}
