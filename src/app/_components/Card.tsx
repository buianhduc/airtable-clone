export const Card = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} className={props.className +" bg-white" +
      " border-gray-400" +
      " h-full" +
      " p-2 rounded" +
      " cursor-pointer" +
      " shadow-sm" +
      " hover:shadow-md w-full"}>
      {props.children}
    </div>
  )
}