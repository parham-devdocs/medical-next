

const Header = ({ children }: { children: string }) => {
   
    return (
        <p
            
            className="text-[40px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400"
        >
            {children}
        </p>
    );
}

export default Header;
