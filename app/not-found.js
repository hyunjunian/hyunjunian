import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col justify-center text-center h-96 p-4 space-y-4">
      <h1 className="text-2xl md:text-4xl">페이지를 찾을 수 없습니다</h1>
      <p><Link href="/">홈으로</Link></p>
    </main>
  );
}
