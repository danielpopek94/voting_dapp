import React from 'react';
import { useState } from 'react';
import Candidate from '../types/Candidate';
import CandidateSingle from './CandidateSingle.tsx';
import candidates from '../data/candidates.json';


export default function CandidatesList() {
	const [candidatesList, setCandidatesList] = useState(candidates);

	return (
		<div className="candidates">
			{candidatesList.map((candidate:Candidate) => {
				return <CandidateSingle key={candidate.name} {...candidate} />;
			})}
		</div>
	);
}