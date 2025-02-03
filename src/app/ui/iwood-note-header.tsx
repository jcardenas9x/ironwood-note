export default function IWoodnoteHeader() {
    return (
        <div
            className="flex flex-col leading-none"
        >
            <h1 className="font-bold text-2xl">Ironwood Note</h1> 
            <p className="font-normal text-[16px]">
                Notepad for <a 
                    href="https://ironwoodrpg.com" rel="noopener noreferrer" target="_blank"
                    className="text-gray-700 hover:underline"
                >Ironwood RPG</a>
            </p>
        </div>
    )
}