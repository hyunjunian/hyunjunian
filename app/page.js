import Link from "next/link";

export default function Page() {
  return (
    <>
      <ul>
        {[0, 1, 2, 3, 4, 5, 6].map((_, index) => (
          <li key={index}>
            <article className="flex flex-col space-y-6 p-12">
              <header className="flex items-center space-x-2 font-medium text-4xl">
                <Link href="#소프트웨어">2024년 5월 8일</Link>
                <Link className="text-neutral-500" href="#소프트웨어">#소프트웨어</Link>
                <Link className="text-neutral-500" href="#소프트웨어">#투자</Link></header>
              <Link href="#소프트웨어">
                <p>나의 투자 원칙 내가 소유할 주식은 오직 아래 2가지다.<br /><br />1. 가치를 매길 수 없는 주식(priceless stocks)<br />2. 싼 주식(cheap stocks)..</p>
              </Link>
              <footer>
                <Link className="text-neutral-500 font-bold" href="#소프트웨어">더 보기</Link>
              </footer>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
