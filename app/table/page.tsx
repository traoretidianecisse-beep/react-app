import Image from "next/image";
import Link from "next/link";
export default function table() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
  <div className="flex flex-row">
        <Link href="/" type="button" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none mr-2">dashboard</Link>
      <Link href="/about" type="button" className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none  mr-2">about</Link>
      <Link href="/form" type="button" className="text-white  bg-success box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none mr-2 ">form</Link>
      <Link href="/table" type="button" className="text-white bg-danger box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none mr-2">table</Link>
      <Link href="/about" type="button" className="text-white bg-warning box-border border border-transparent hover:bg-warning-strong focus:ring-4 focus:ring-warning-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none  mr-2">about</Link>

      


      </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
         <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
    <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
            <tr>
                <th scope="col" className="px-6 py-3 font-medium">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                    Color
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                    Category
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                    Price
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                    Stock
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-neutral-primary border-b border-default">
                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    231
                </td>
            </tr>
            <tr className="bg-neutral-primary border-b border-default">
                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
                <td className="px-6 py-4">
                    423
                </td>
            </tr>
            <tr className="bg-neutral-primary">
                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
                <td className="px-6 py-4">
                    121
                </td>
            </tr>
        </tbody>
    </table>
</div>

          
        </div>
        
      </main>
    </div>
  );
}
