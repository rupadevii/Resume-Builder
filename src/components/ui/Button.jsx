export default function Button({children}) {
    return (
        <button className='flex my-2 bg-black rounded-lg text-white py-3 px-4 capitalize shadow-lg cursor-pointer gap-3 items-center hover:bg-stone-800'>{children}</button>
    )
}
