interface NavLink {
  id: number;
  title: string;
  path: string;
}

const navLinks: NavLink[] = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Shop", path: "/shop" },
  { id: 3, title: "Cart", path: "/cart" },
  { id: 4, title: "Profile", path: "/profile" },
  { id: 4, title: "Studio", path: "/studio" },
];

export default navLinks;
