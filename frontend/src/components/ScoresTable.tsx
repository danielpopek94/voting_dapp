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
						<th className="scores__candidate">Candidate</th>
						<th className="scores__score">Score</th>
					</tr>
				</thead>
				<tbody>
					{scores.map(({ slug, score }) => (
							<tr key={slug}>
								<td className="scores__candidate">{slug}</td>
								<td className="scores__score">{score}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
}