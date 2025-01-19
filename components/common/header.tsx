

const Header = ({ children }: { children: string }) => {
   
    return (
        <p
            
            className="text-[40px] font-bold bg-clip-text  text-primary"
        >
            {children}
        </p>
    );
}

export default Header;
