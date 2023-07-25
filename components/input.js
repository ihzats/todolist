export default function Input({ name, placeholder, type }) {
    return (
        <input className="border-none rounded-md p-2 invert-[1]"
            type={type}
            name={name}
            placeholder={placeholder}
        />
    )
}
