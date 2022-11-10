function Header(props) {
  return (
    <header className="bg-slate-400 dark:bg-black h-16 ">
      <div className="max-w-4xl h-full mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-red-500">
          🤖 iron man
        </a>
        <div className="flex items-center text-slate-400">
          <div className="cart flex items-center relative p-4 mx-2">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            <span className="absolute w-4 h-4 rounded-full bg-red-">1</span>
          </div>
          <span className="price">$4.00</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
