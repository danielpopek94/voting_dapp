import React from 'react';
import Candidate from '../types/Candidate';

export default function CandidateSingle({name, prefix, image, slogan}: Candidate) {
	return (
		<div className="candidate">
			<div className="candidate__photo-wrapper">
				<img className="candidate__photo" src={image} alt={name} />
			</div>

			<div className="candidate__content-wrapper">
				<h2 className="candidate__name">{prefix} {name}</h2>
				<p className="candidate__slogan">{slogan}</p>
				<button className="candidate__button" onClick={() => console.log(`Voted for ${name}`)}>
					Vote
				</button>
			</div>
		</div>
	);
}