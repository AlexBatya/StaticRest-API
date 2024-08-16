class WeightService {
	static async processWeightData(records: any[]): Promise<string> {
		if (records && Array.isArray(records)) {
			records.forEach(record => {
					const { j_id, tare, brutto, netto, good, car_number } = record;
					console.log(`Результат взвешивания ID: ${j_id}, Груз: ${good}, Вес нетто: ${netto}, Автомобиль: ${car_number}`);
			});
			return 'Результаты взвешивания успешно отправлены';
		}
		else {
			throw new Error('Неверный формат данных для отправки результатов взвешивания');
		}
	}
}

export default WeightService;
