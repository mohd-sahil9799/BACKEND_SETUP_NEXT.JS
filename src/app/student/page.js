import Link from "next/link";

const Page = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen color-1">
      <div className="mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <Link href="/checkform">LOGIN PAGE</Link>
        </button>
      </div>

      <div className="mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <Link href="/form/login">PAGE </Link>
        </button>
      </div>

      <div className="mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <Link href="/form/Register">Registration PAGE</Link>
        </button>
      </div>
      <div className="mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <Link href="/studentList">Student List</Link>
        </button>
      </div>
      <div className="mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <Link href="/JsonApi">JsonApi List</Link>
        </button>
      </div>
    </div>
    </>
  );
};

export default Page;
