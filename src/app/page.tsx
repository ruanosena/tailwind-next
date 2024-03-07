import Image from "next/image";

export default function Home() {
	return (
		<div className="p-8 bg-slate-50 dark:bg-slate-900 dark:text-slate-100 text-slate-900 h-screen flex flex-col items-center text-center">
			<div className="max-w-app">
				<h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</h1>
				<p className="mt-4 dark:text-slate-400">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatem ipsa, eaque
					atque repellat aliquam iste consequuntur? Porro nam sint non. Velit temporibus similique
					iusto, facilis magnam dolore autem repellendus.
				</p>
				<button className="bg-sky-500 dark:bg-sky-400 dark:text-sky-950 text-white px-4 py-2 rounded-md font-medium mt-4 enabled:hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed">
					Sign In
				</button>
			</div>
		</div>
	);
}
