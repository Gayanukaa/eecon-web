export default function HeaderCard({ text }: { text: String }) {
    return (
        <div className="w-full p-4 pt-8">
            <div className="w-full bg-gray-300 flex flex-row border-r-4 border-red-700">
                <div className="basis-1/4 sm:basis-1/5 md:basis-1/6 bg-red-700 p-4"></div>
                <div className="basis-3/4 sm:basis-4/5 md:basis-5/6 flex items-center ml-[4px] border-l-4 border-red-700">
                    <h5 className="pl-8 text-black font-medium">{text}</h5>
                </div>
            </div>
        </div>
    );
}
