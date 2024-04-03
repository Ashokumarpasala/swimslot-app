import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
	return (
		<div>
			<div
				id="carouselExampleCaptions"
				class="carousel slide"
				data-bs-ride="carousel"
			>
				<div class="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="0"
						class="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					></button>
				</div>
				<div class="carousel-inner ">
					<div
						class="carousel-item active"
						style={{ height: "80vh", objectFit: "contain" }}
					>
						<img
							src="https://www.aucklandforkids.co.nz/wp-content/uploads/2020/11/Fulton-Swim-School.jpg"
							class="d-block w-100"
							alt="..."
						/>
						<div class="carousel-caption d-none d-md-block text-white fw-bold">
							<h1 style={{ textShadow: "3px 3px 3px black" }}>
								Select By Day in a week
							</h1>
							<p style={{ textShadow: "3px 3px 3px black" }}>
								Start by deciding on the date and time that works best for you.
								You'll want to check the availability of the pool and the
								trainers for your preferred time.
							</p>
							<button className="btn btn-secondary px-5 shadow">
								Book Now
							</button>
						</div>
					</div>
					<div
						class="carousel-item"
						style={{ height: "80vh", objectFit: "contain" }}
					>
						<img
							src="https://media.istockphoto.com/id/1167733673/photo/female-coach-in-water-giving-group-of-children-swimming-lesson-in-indoor-pool.jpg?s=612x612&w=0&k=20&c=NC9SY321Q4PwuVNDjVI7Z_2sO46hxfXXCQBXxWkgEow="
							class="d-block w-100"
							alt="..."
						/>
						<div class="carousel-caption d-none d-md-block text-white fw-bold">
							<h1 style={{ textShadow: "3px 3px 3px black" }}>
								Select By Grade
							</h1>
							<p style={{ textShadow: "3px 3px 3px black" }}>
								If you're booking a group session, you'll need to specify the
								grade level of the students. This will help ensure that the
								trainer can tailor the session to the appropriate skill level.
							</p>
							<button className="btn btn-secondary px-5 shadow">
								Book Now
							</button>
						</div>
					</div>
					<div
						class="carousel-item"
						style={{ height: "80vh", objectFit: "contain" }}
					>
						<img
							src="https://www.timeoutabudhabi.com/cloud/timeoutabudhabi/2021/09/12/tIEwpaLm-2015_splash_1_base-1.jpg"
							class="d-block w-100"
							alt="..."
						/>
						<div class="carousel-caption d-none d-md-block text-white fw-bold">
							<h1 style={{ textShadow: "3px 3px 3px black" }}>
								Select By Trainer
							</h1>
							<p style={{ textShadow: "3px 3px 3px black" }}>
								Once you have a date and time, you can choose a trainer. You may
								want to consider the trainer's experience, teaching style, and
								availability. If you have a preference for a trainer who
								specializes in teaching a certain grade level, you can specify
								that as well.{" "}
							</p>
							<Link to="/book_by_trainer">
								<button className="btn btn-secondary px-5 shadow">
									Book Now
								</button>
							</Link>
						</div>
					</div>
				</div>
				<button
					class="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button
					class="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
}

export default HomePage;
