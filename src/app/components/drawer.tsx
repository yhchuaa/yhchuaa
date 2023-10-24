interface Props{

}
export default function Drawer(props:Props) {
    return(
        <div className="fixed top-0 right-0 -z-10 h-full w-64 transition-all duration-500 transform translate-x-full bg-white shadow-lg peer-checked:translate-x-0">
        <div className="px-6 py-4">
            <h2 className="text-lg font-semibold">Drawer</h2>
            <p className="text-gray-500">This is a drawer.</p>
        </div>
    </div>
    )
}