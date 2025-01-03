type SearchBarProps = {
  children?: React.ReactNode;
  className?: string;
}
export const SearchBar = ({children, className}: SearchBarProps) => {
  return (
    <div className={"rounded-full shadow-sm hover:shadow-md px2 flex items-center" +
      " cursor-pointer focus-visible w-full h-[32px] border "+className} role={"button"}>
      {children}
    </div>
  )
}