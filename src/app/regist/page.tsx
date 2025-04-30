import Link from "next/link";

export default function Regist() {
  return (
    <>
      <form action="POST">
        <div>
          <p>ユーザ名：</p>
          <input type="text" />
        </div>
        <div>
          <p>パスワード：</p>
          <input type="password" />
        </div>
        <div>
          <button>新規登録</button>
        </div>
      </form>
      <div>
        <Link href="/login">ログイン</Link>
      </div>
    </>
  );
}
