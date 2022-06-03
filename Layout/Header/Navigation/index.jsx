import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Navigation() {
  const router = useRouter();
  const active = (href) => {
    if (router.pathname === href) return ' active';
    return '';
  };
  return (
    <div id="navigation">
      <ul className="navigation-wrapper">
        {[
          { title: 'Trang chủ', href: '/' },
          { title: 'Giới thiệu', href: '/about' },
          { title: 'Sản Phẩm', href: '/products' },
          { title: 'Góc làm đẹp', href: '/make-beauty' },
          { title: 'Đại lý', href: '/dealer' }
        ].map((el, index) => (
          <li
            key={index}
            className={`navigation-item ${active(el.href)}`}
          >
            <Link href={el.href}>
              <a>{el.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
