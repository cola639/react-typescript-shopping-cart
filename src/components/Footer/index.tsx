import { FC } from 'react'

export interface IFooterProps {}

const Footer: FC<IFooterProps> = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      <p className="footer-links">
        <a href="https://github.com/sivadass/react-shopping-cart" target="_blank" rel="noreferrer">
          View Source on Github
        </a>
        <span> / </span>
        <a href="mailto:contact@sivadass.in" target="_blank" rel="noreferrer">
          Need any help?
        </a>
        <span> / </span>
        <a href="https://twitter.com/NSivadass" target="_blank" rel="noreferrer">
          Say Hi on Twitter
        </a>
        <span> / </span>
        <a href="https://sivadass.in" target="_blank" rel="noreferrer">
          Read My Blog
        </a>
      </p>
      <p>
        &copy; {currentYear} <strong>Veggy</strong> - Organic Green Store
      </p>
    </footer>
  )
}

export default Footer
