

const Header = ({ children }: { children: string }) => {
   
    return (
        <p
            
            className="text-[40px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800"
        >
            {children}
        </p>
    );
}

export default Header;
