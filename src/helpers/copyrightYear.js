// display copyright year based on current year
const copyrightYear = () => {
	const year = new Date().getFullYear();
	if (year > 2021) {
		return <span>2021 - {year}</span>;
	} else {
		return <span>{year}</span>;
	}
};

export default copyrightYear;
