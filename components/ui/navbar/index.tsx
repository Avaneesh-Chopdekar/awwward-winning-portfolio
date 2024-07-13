import Menu from "./menu";

export default function Navbar() {
  return (
    <header className="fixed left-8 right-8 top-8 z-50 flex items-center justify-between">
      <div id="left">
        {/* Dark Mode Toggle */}
        {/* i18n Toggle */}
      </div>
      <div id="right">
        <Menu />
      </div>
    </header>
  );
}
