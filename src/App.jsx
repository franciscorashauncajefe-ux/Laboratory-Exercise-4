import React,{useEffect,useMemo,useState} from 'react';
import ProductCard from './components/ProductCard.jsx';
import SearchBar from './components/SearchBar.jsx';
import products from './data/products.js';
function App(){
 const [cartCount,setCartCount]=useState(0);
 const [lastAdded,setLastAdded]=useState('');
 const [searchText,setSearchText]=useState('');
 const [debouncedSearch,setDebouncedSearch]=useState('');
 const [category,setCategory]=useState('All');
 const [sortOrder,setSortOrder]=useState('default');

 useEffect(()=>{
  const timer=setTimeout(()=>setDebouncedSearch(searchText),300);
  return ()=>clearTimeout(timer);
 },[searchText]);

 const filteredProducts=useMemo(()=>{
  const keyword=debouncedSearch.trim().toLowerCase();
  let result=products.filter(product=>{
   const matchesSearch=product.title.toLowerCase().includes(keyword);
   const matchesCategory=category==='All'||product.category===category;
   return matchesSearch&&matchesCategory;
  });
  if(sortOrder==='low-to-high') result=[...result].sort((a,b)=>a.price-b.price);
  else if(sortOrder==='high-to-low') result=[...result].sort((a,b)=>b.price-a.price);
  return result;
 },[debouncedSearch,category,sortOrder]);

 useEffect(()=>{document.title=`CvSU Mini Store (${filteredProducts.length} results)`;},[filteredProducts.length]);

 function handleAddToCart(title){setCartCount(count=>count+1);setLastAdded(title);}
 function handleClearFilters(){setSearchText('');setDebouncedSearch('');setCategory('All');setSortOrder('default');}

 return <div className="app">
  <header className="site-header"><div><p className="eyebrow">DCIT26 · APPLICATION DEVELOPMENT</p><h1>CvSU Mini Store</h1><p className="header-description">Find products quickly with live search, category filters, and price sorting.</p></div>
   <div className="cart-summary" aria-live="polite"><span className="cart-icon">🛒</span><div><strong>{cartCount} {cartCount===1?'item':'items'}</strong><small>in your cart</small></div></div>
  </header>
  <main className="content">
   <section className="cart-message" aria-live="polite">{cartCount===0?<p><strong>Your cart is empty.</strong> Add an available product to get started.</p>:<p><strong>Items added to cart: {cartCount}</strong> (Last added: <strong>{lastAdded}</strong>)</p>}</section>
   <div className="section-heading"><div><p className="eyebrow">BROWSE OUR ITEMS</p><h2>Product Catalog</h2></div><span className="product-count">{products.length} products</span></div>
   <SearchBar searchText={searchText} onSearchChange={setSearchText} category={category} onCategoryChange={setCategory} sortOrder={sortOrder} onSortChange={setSortOrder} onClearFilters={handleClearFilters}/>
   <p className="results-count" aria-live="polite">Showing {filteredProducts.length} of {products.length} products</p>
   {filteredProducts.length>0?<section className="product-grid" aria-label="Filtered product catalog">{filteredProducts.map(product=><ProductCard key={product.id} title={product.title} price={product.price} category={product.category} inStock={product.inStock} onAddToCart={handleAddToCart}>{product.id===1&&<span>New</span>}{product.id===5&&<span>Popular</span>}</ProductCard>)}</section>:<div className="empty-state"><span className="empty-icon">🔎</span><h3>No products found.</h3><p>Try a different keyword or category.</p><button className="clear-button" type="button" onClick={handleClearFilters}>Clear Filters</button></div>}
  </main><footer><p>© 2026 CvSU Mini Store · Laboratory Exercise 4</p></footer>
 </div>;
}
export default App;