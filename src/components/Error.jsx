const Error = ({children}) => {
  return (
    <div className="bg-red-700 text-center text-white p-3 font-bold mb-2 rounded-md">
        <p>{children}</p>
    </div>
  )
}

export default Error
