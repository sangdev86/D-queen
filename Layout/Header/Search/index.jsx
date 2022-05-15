import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Search() {
  return (
    <div id="search">
      <input
        type="search"
        className="search input"
        placeholder="Hãy tìm thứ làm bạn cá tính hơn :)"
      />
      <span className="search-icon">
        <FaSearch />
      </span>
    </div>
  );
}
