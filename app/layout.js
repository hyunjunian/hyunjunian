import "./globals.css";

export const metadata = {
  title: "현주니안의 블로그",
  description: "현주니안의 블로그",
};

export default function Layout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
