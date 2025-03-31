function Header() {
    return (
      <header className="fixed top-0 left-0 w-full z-10 bg-secondary shadow-[0_4px_8px_rgba(0,0,0,0.5)] p-4 flex justify-between items-center text-white">
        <div className="text-xl font-bold">Brainwave</div>
        <nav className="flex gap-6">
          <a href="#features" className="hover:text-button-hover">FEATURES</a>
          <a href="#pricing" className="hover:text-button-hover">PRICING</a>
          <a href="#how-to-use" className="hover:text-button-hover">HOW TO USE</a>
          <a href="#roadmap" className="hover:text-button-hover">ROADMAP</a>
        </nav>
        <div className="flex gap-4">
          <button className="border border-border1 rounded px-4 py-2 hover:bg-button-hover">NEW ACCOUNT</button>
          <button className="border border-border1 rounded px-4 py-2 hover:bg-button-hover">SIGN IN</button>
        </div>
      </header>
    );
  }
  
  export default Header;