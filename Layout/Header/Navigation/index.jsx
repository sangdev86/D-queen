import Link from 'next/link';
import React from 'react';

export default function Navigation() {
  return (
    <div id="navigation">
      <ul className="navigation-wrapper">
        {[
          { title: 'Trang chủ', href: '/' },
          { title: "Về D'Queen", href: '/about' },
          { title: 'Sản Phẩm', href: '/products' },
          { title: 'Góc làm đẹp', href: '/make-beauty' },
          { title: 'Đại lý', href: '/dealer' }
        ].map((el, index) => (
          <li key={index} className="navigation-item header-text">
            <Link href={el.href}>
              <a>{el.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
