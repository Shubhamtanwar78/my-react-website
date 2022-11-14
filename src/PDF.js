import React from "react";


const MyPDF = () => {


	const onButtonClick = () => {

		fetch('Shubham-Tanwar-CV.pdf').then(response => {
			response.blob().then(blob => {

				// const fileURL = window.URL.createObjectURL(blob);

				let alink = document.createElement('a');
				alink.href = "https://drive.google.com/u/0/uc?id=1NWh_pPoqaJJM3LR3zD8lkCFUZxRGv-DU&export=download";
				alink.download = 'Shubham-Tanwar-CV.pdf';
				alink.click();
			})
		})
	}
	return (
		<>
			<center>
				<button
        className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
        onClick={onButtonClick}>
					Download CV
				</button>
			</center>
		</>
	);
};

export default MyPDF;
