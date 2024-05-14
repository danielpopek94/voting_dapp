import React from 'react';
import { useState } from 'react';

const fakeScores = [
	{ slug: 'kitty', score: 3 },
	{ slug: 'doggo', score: 2 },
];

export default function ScoresTable() {
	const [scores, setScores] = useState(fakeScores);

	return (
		<div className="scores">
			<h2>Scores</h2>
			<table>
				<thead>
					<tr>
						<th>Candidate</th>
						<th>Score</th>
					</tr>
				</thead>
				<tbody>
					{scores.map(({ slug, score }) => {
						return (
							<tr key={slug}>
								<td>{slug}</td>
								<td>{score}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}