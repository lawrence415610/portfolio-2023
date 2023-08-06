import CalendarHeatmap from "react-calendar-heatmap";
import { useQuery, gql } from "@apollo/client";
import "./GithubContribution.scss";

const GET_CONTRIBUTIONS = gql`
	query getContributions($username: String!) {
		user(login: $username) {
			contributionsCollection {
				contributionCalendar {
					totalContributions
					weeks {
						contributionDays {
							contributionCount
							date
						}
					}
				}
			}
		}
	}
`;

const GithubContributions = () => {
	const username = process.env.REACT_APP_GITHUB_USERNAME;
	const { loading, error, data } = useQuery(GET_CONTRIBUTIONS, {
		variables: { username },
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error.message}</p>;

	const transformedData = data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
		(week) => {
			return week.contributionDays.map((day) => {
				return {
					date: day.date,
					count: day.contributionCount,
				};
			});
		}
	);

	return (
		<CalendarHeatmap
			values={transformedData}
			classForValue={(value) => {
				if (!value) {
					return "color-empty";
				}
				return `color-scale-${value.count}`;
			}}
		/>
	);
};

export default GithubContributions;
