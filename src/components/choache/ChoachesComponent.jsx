import React, { useState } from "react";
import choachesList from "./rawData";
function ChoachesComponent() {
	const [selectedTriner, setSelectedTrainer] = useState(false);
	const [mainList, setMainlist] = useState(true);
	const [selectedId, setSelectedId] = useState(null);
	const singleCoach = choachesList[selectedId - 1];
	console.log(singleCoach);
	return (
		<>
			{mainList ? (
				<>
					<div className="bg-light p-3">
						<div className="container" style={{ fontSize: "14px" }}>
							{choachesList.map((ele) => {
								return (
									<>
										<div
											key={ele.id}
											className="shadow p-3 m-2 d-flex rounded-2 align-items-end justify-content-between bg-white"
										>
											<div className="d-flex">
												<div>
													<img
														style={{ width: "150px" }}
														className="img-fluid"
														src="https://sharpmagazine.com/wp-content/uploads/2018/04/sidebar2.jpg"
														alt=""
													/>
												</div>
												<div className="p-3">
													<div>
														Name : <span className="fw-bold">{ele.name}</span>
													</div>
													<div>
														Age :{" "}
														<span className="fw-bold">{ele.age} years</span>
													</div>
													<div>
														Experience :{" "}
														<span className="fw-bold">
															{ele.yearsExperience} years
														</span>
													</div>

													<div>
														Rating :{" "}
														<span className="fw-bold">
															{ele.rating} Rating | {ele.reviews} Reviews
														</span>
													</div>
													<button
														className="btn btn-sm btn-secondary px-4 my-2"
														onClick={() => {
															setSelectedId(ele.id);
															setSelectedTrainer(true);
															setMainlist(false);
														}}
													>
														select
													</button>
												</div>
											</div>
											<button className="btn btn-primary btn-sm">
												Read more
											</button>
										</div>
									</>
								);
							})}
						</div>
					</div>
				</>
			) : null}

			{selectedTriner ? (
				<>
					<div className="bg-light p-3 ">
						<h1>slected trainer</h1>
						<button
							className="btn btn-sm btn-secondary"
							onClick={() => {
								setMainlist(true);
								setSelectedTrainer(false);
							}}
						>
							back to trainers page
						</button>
						<>
							<div
								key={singleCoach.id}
								className="shadow container mx-auto p-3 m-2 d-flex rounded-2 align-items-end justify-content-between bg-white"
							>
								<div className="d-flex">
									<div>
										<img
											style={{ width: "150px" }}
											className="img-fluid"
											src="https://sharpmagazine.com/wp-content/uploads/2018/04/sidebar2.jpg"
											alt=""
										/>
									</div>
									<div className="p-3">
										<div>
											Name : <span className="fw-bold">{singleCoach.name}</span>
										</div>
										<div>
											Age :{" "}
											<span className="fw-bold">{singleCoach.age} years</span>
										</div>
										<div>
											Experience :{" "}
											<span className="fw-bold">
												{singleCoach.yearsExperience} years
											</span>
										</div>

										<div>
											Rating :{" "}
											<span className="fw-bold">
												{singleCoach.rating} Rating | {singleCoach.reviews}{" "}
												Reviews
											</span>
										</div>
										<button className="btn btn-sm btn-secondary px-4 my-2">
											select
										</button>
									</div>
								</div>
								<button className="btn btn-primary btn-sm">Read more</button>
							</div>
						</>
					</div>
				</>
			) : null}
		</>
	);
}

export default ChoachesComponent;
