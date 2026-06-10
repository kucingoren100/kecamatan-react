import { Link } from 'react-router-dom'

export default function PageHero({ title, description, breadcrumb }) {
  return (
    <div className="page-hero">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Beranda</Link>
          <span className="breadcrumb-sep">/</span>
          <span>{breadcrumb}</span>
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}
