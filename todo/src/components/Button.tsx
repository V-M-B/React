export default function Button(props: any) {
  const {buttonType, children} = props;
  
    return (
      <button 
      className={`h-[45px] bg-[#473a2b] hover:bg-[#322618] hover:text-amber-50 w-full rounded-[15px] cursor-pointer ${buttonType === "secondary" ? "opacity-[85%]" : ""} `}
      >
        {children} 
      </button>
    
    );
  }