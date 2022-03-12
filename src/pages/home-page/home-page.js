import { useEffect } from 'react';
import { useHttp } from '../../hooks/http.hooks';
import { useDispatch, useSelector } from 'react-redux';

import { productsFetching, productsFetched, productsFetchingError } from '../../store/reducers/productsSlice';
import { SliderMain } from '../../components/slider-main';
import { OurProduction } from '../../components/our-production';
import { BestSelling } from '../../components/best-selling';
import { Novelties } from '../../components/novelties';
import { Promo } from '../../components/promo';
import { Recommend } from '../../components/recommend';
import { Sales } from '../../components/sales';
import { Reviews } from '../../components/reviews';
import { Advantage } from '../../components/advantage';

import './home-page.scss';


export const HomePage = () => {
	const { products, productsLoadingStatus } = useSelector(state => state.products);
	const dispatch = useDispatch();
	const { request } = useHttp();

	useEffect(() => {
		dispatch(productsFetching());
		request("http://localhost:3001/products")
			.then(data => dispatch(productsFetched(data)))
			.catch(() => productsFetchingError())
	}, [])

	if (productsLoadingStatus === 'loading') {
		return <h5 className="loading">Загрузка данных...</h5>
	} else if (productsLoadingStatus === 'error') {
		return <h5 className="error">Ошибка загрузки данных...</h5>
	}

	return (
		<div className="home-page">
			<div className="home-page__bestseller">
				<SliderMain />
				<OurProduction products={products} />
				<BestSelling />
				<Novelties />
				<Promo />
				<Recommend />
				<Sales />
				<Reviews />
				<Advantage />
			</div>
		</div>
	)
}