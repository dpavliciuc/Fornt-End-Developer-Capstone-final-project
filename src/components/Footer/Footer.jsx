import { createElement } from 'react';
import { Logo, Heading, SocialMediaWidget } from '../../components';
import { Link } from 'react-router-dom';
import navigation from '../../settings/cms/navigation.json';
import logo from '../../assets/Logofooter1.png';
import './Footer.css';

export const Footer = () => {
  return (
    <footer role="region" aria-label="Footer Section">
      <Logo
        className="LL-FooterLogo"
        src={logo}
        height="120px"
      />

      <section className="LL-FooterMenu">
        <Heading tag="h4" size="base">
          Menu
        </Heading>
        <nav className="LL-Navigation LL-FooterNavigation">
          <ul>
            {navigation.map(({ id, name, title, link, url, state }) => {
              const Element = link === 'internal' ? Link : 'a';
              const linkProps =
                Element === 'a' ? { href: url } : { to: url, state };
              return createElement(
                'li',
                { key: id, name, role: 'menuitem' },
                <Element title={title} {...linkProps}>
                  {title}
                </Element>
              );
            })}
          </ul>
        </nav>
      </section>

      <section className="LL-FooterContact">
        <Heading tag="h4" size="base">
          Contact
        </Heading>
        <article>
          <p>123 Mediterranean Avenue Chicago, IL 6000</p>
          <p>Phone: (555) 123-4567</p>
          <p>Email: info@littlelemon.com</p>
        </article>
      </section>

      <section className="LL-FooterSocial">
        <Heading tag="h4" size="base">
          Social Media
        </Heading>
        <nav className="LL-Navigation LL-FooterNavigation">
          <SocialMediaWidget />
        </nav>
      </section>
    </footer>
  );
};
