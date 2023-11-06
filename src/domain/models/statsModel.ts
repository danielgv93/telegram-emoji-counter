export type StatsModel = {
	data: DataModel[];
	users: string[];
	stats: SummaryStats[];
};
export type SummaryStats = {
	user: string;
	stats: Stats;
};
export type Stats = {
	max: number;
	min: number;
	mean: number;
	total: number;
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
