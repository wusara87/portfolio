import { Link, useMatch, useResolvedPath } from "react-router-dom"

// navigation component
export default function Nav() {
  return (
    <>
      <nav className="nav">
        <Link to="/" className="title">Sara Wu</Link>
        <ul>
          <CustomLink to="/"> Home</CustomLink>
          <CustomLink to="/skills">Skills</CustomLink>
          <CustomLink to="/projects">Projects</CustomLink>
          <CustomLink to="/contact">Contact Info</CustomLink>
        </ul>
      </nav>
    </>
  )
}

// custom link component
function CustomLink({ to, children, ...props }) {
  // resolve the path for the link
  const resolvedPath = useResolvedPath(to)

  // check if the link is active
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    // list item for the link
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}