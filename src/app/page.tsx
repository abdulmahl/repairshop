import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col text-center justify-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-sky-50 sm:text-2xl">
          <h1 className="text-4xl font-semibold ">
            Sire&apos;s <br />
            Computer Repair Shop
          </h1>
          <address>
            555 Linguini Lane <br />
            Florida City, FC 88878
          </address>
          <p>Open Daily: 09am - 6pm</p>
          <Link
            href={"tel:0769001909"}
            className="hover:underline underline-offset-4"
          >
            076-900-1909
          </Link>
        </div>
      </main>
    </div>
  );
}
