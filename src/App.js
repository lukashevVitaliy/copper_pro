import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/header';
import { Footer } from './components/footer';
import { HomePage } from './pages/home-page';
import { AboutPage } from './pages/about-page';
import { CatalogPage } from './pages/catalog-page';
import { CatalogPageItem } from './pages/catalog-page-item';
import { NewsPage } from './pages/news-page';
import { NewsItemPage } from './pages/news-item-page';
import { CartPage } from './pages/cart-page';

function App() {
	return (
		<Router>
			<div className="app">
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="catalog" element={<CatalogPage />} />
					<Route path="catalog/:id" element={<CatalogPageItem />} />
					<Route path="news" element={<NewsPage />} />
					<Route path="news/:id" element={<NewsItemPage />} />
					<Route path="cart" element={<CartPage />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;