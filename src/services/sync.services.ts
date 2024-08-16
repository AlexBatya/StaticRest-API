class SyncService {
	static async syncGoods(goods: any[]): Promise<string> {
		if (goods && Array.isArray(goods)) {
			goods.forEach(item => {
				const { name, code, coeff } = item;
				console.log(`Товар: ${name}, Код: ${code}, Коэффициент: ${coeff}`);
			});
			return 'Синхронизация товаров завершена';
		} else {
			throw new Error('Неверный формат данных для синхронизации товаров');
		}
	}

	static async syncCompanies(companies: any[]): Promise<string> {
		if (companies && Array.isArray(companies)) {
			companies.forEach(company => {
				const { name, law_addr, fact_addr, contacts, inn, kpp, ogrn } = company;
				console.log(`Контрагент: ${name}, ИНН: ${inn}`);
			});
			return 'Синхронизация контрагентов завершена';
		} else {
			throw new Error('Неверный формат данных для синхронизации контрагентов');
		}
	}

	static async syncCars(cars: any[]): Promise<string> {
		if (cars && Array.isArray(cars)) {
			cars.forEach(car => {
				const { number, mark, model, tare, rfid, downs, susps, betweens } = car;
				console.log(`Автомобиль: ${number}, Марка: ${mark}`);
			});
			return 'Синхронизация автомобилей завершена';
		} else {
			throw new Error('Неверный формат данных для синхронизации автомобилей');
		}
	}

	static async syncTrailers(trailers: any[]): Promise<string> {
		if (trailers && Array.isArray(trailers)) {
			trailers.forEach(trailer => {
				const { number, mark, model, downs, susps, betweens } = trailer;
				console.log(`Прицеп: ${number}, Марка: ${mark}`);
			});
			return 'Синхронизация прицепов завершена';
		} else {
			throw new Error('Неверный формат данных для синхронизации прицепов');
		}
	}

	static async syncTrains(trains: any[]): Promise<string> {
		if (trains && Array.isArray(trains)) {
			trains.forEach(train => {
				const { number, tare, max_weight } = train;
				console.log(`Вагон: ${number}, Тара: ${tare}`);
			});
			return 'Синхронизация вагонов завершена';
		} else {
				throw new Error('Неверный формат данных для синхронизации вагонов');
		}
	}

	static async syncDrivers(drivers: any[]): Promise<string> {
		if (drivers && Array.isArray(drivers)) {
			drivers.forEach(driver => {
					const { fio, reg_number } = driver;
					console.log(`Водитель: ${fio}, Регистрационный номер: ${reg_number}`);
			});
			return 'Синхронизация водителей завершена';
		} else {
			throw new Error('Неверный формат данных для синхронизации водителей');
		}
	}
}

export default SyncService;
