import React from 'react';
import './SearchBar.css';
function SearchBar({searchText,onSearchChange,category,onCategoryChange,sortOrder,onSortChange,onClearFilters}) {
 return <section className="search-panel" aria-label="Search and filter products">
  <div className="search-field"><label htmlFor="product-search">Search products</label><input id="product-search" type="search" placeholder="Search by product name..." value={searchText} onChange={e=>onSearchChange(e.target.value)}/></div>
  <div className="filter-field"><label htmlFor="category-filter">Category</label><select id="category-filter" value={category} onChange={e=>onCategoryChange(e.target.value)}><option value="All">All Categories</option><option>Electronics</option><option>Books</option><option>School Supplies</option><option>Accessories</option></select></div>
  <div className="filter-field"><label htmlFor="sort-filter">Sort by price</label><select id="sort-filter" value={sortOrder} onChange={e=>onSortChange(e.target.value)}><option value="default">Default</option><option value="low-to-high">Price: Low to High</option><option value="high-to-low">Price: High to Low</option></select></div>
  <button className="clear-button" type="button" onClick={onClearFilters}>Clear Filters</button>
 </section>;
}
export default SearchBar;