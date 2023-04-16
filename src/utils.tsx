export function getDDMMDate(date: Date) {
	return String(date.getDate() + ':' + (date.getMonth() + 1))
}