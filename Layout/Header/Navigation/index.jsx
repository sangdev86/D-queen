import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../../components/reducer/actions';

export default function Navigation() {
  const router = useRouter();
  const dispatch = useDispatch();

  const active = (href) => {
    if (router.asPath === href) return ' active';
    return '';
  };
  return (
    <div id="navigation">
      <ul className="navigation-wrapper">
        {[
          { title: 'Trang chủ', href: '/' },
          // { title: 'Giới thiệu', href: '/about' },
          { title: 'Sản Phẩm', href: '/product' }
          // { title: 'Góc làm đẹp', href: '/make-beauty' },
          // { title: 'Đại lý', href: '/dealer' }
        ].map((el, index) => (
          <li
            key={index}
            className={`navigation-item ${active(el.href)}`}
            onClick={() => dispatch(ACTIONS.loadingPage(true))}
          >
            <Link href={el.href} prefetch={false}>
              <a onClick={() => dispatch(ACTIONS.loadingPage(true))}>
                {el.title}
              </a>
            </Link>
          </li>
        ))}
        <li
          className={`navigation-item ${active('/admin')}`}
          onClick={() => dispatch(ACTIONS.loadingPage(true))}
        >
          <Link href="/admin" prefetch={false}>
            <a onClick={() => dispatch(ACTIONS.loadingPage(true))}>
              Quản trị
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
