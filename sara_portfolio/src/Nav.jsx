import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Nav() {
  return <nav className="nav">
    {/* <img className="icon" src="/icon.png" alt="icon" /> */}
    <Link to="/" className="title">Sara Wu</Link>
    <ul>
      <CustomLink to="/"> Home</CustomLink>
      <CustomLink to="/skills">Skills</CustomLink>
      <CustomLink to="/projects">Projects</CustomLink>
      <CustomLink to="/contact">Contact Info</CustomLink>
    </ul>
  </nav>
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}