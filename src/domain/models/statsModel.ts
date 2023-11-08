export type StatsModel = {
	data: DataModel[];
	users: string[];
	years: string[];
	statsByUser: StatsByUserI[];
	summaryStats: SummaryStatsI[];
};
export type StatsByUserI = {
	user: string;
	statsByUser: Record<string, number>;
};
export type SummaryStatsI = {
	statName: string;
	summaryStats: Record<string, number>;
};
export type DataModel = {
	date: string;
	[key: string]: string | number;
};

export type ChatModel = {
	id: number;
	name: string;
	type: string;
	messages: Message[];
};

export type Message = {
	id: string;
	type: string;
	date: string;
	date_unixtime: number;
	actor: string;
	actor_id: string;
	from: string;
	from_id: string;
	action: string;
	title: string;
	members: string[];
	text: any;
	text_entities: any[];
};
