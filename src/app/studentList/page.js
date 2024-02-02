import Link from 'next/link';

const Page = () => {
  return (
    <div className="flex justify-center my-60">
      <ul className="">
        <li><Link href="/studentList/TOME"><h1 className="text-6xl">TOM..</h1></Link></li>
        <br /><br />
        <li><Link href="/studentList/BRUCE"><h1 className="text-5xl">Bruce..</h1></Link></li>
        <br /><br />
        <li><Link href="/studentList/CHAPATIN"><h1 className="text-4xl">Captain..</h1></Link></li>
      </ul>
    </div>
  );
};

export default Page;
