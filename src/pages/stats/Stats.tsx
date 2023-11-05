import { useChat, useChatRedirect } from '../../domain/hooks/chatHooks';
import { SummaryBarChart } from './SummaryBarChart';
import { StatsByStat } from './StatsByStat';
import { StatsByUser } from './StatsByUser';
import { useSettingsStore } from 'domain/store/settingsStore';

export const Stats = () => {
	useChatRedirect();
	const { month } = useSettingsStore();
	useChat(month);
	return (
		<div className={'flex flex-col items-center'}>
			<SummaryBarChart />
			<div className={'w-[80%] bg-gray-300 h-[1px] my-6'} />
			<StatsByStat />
			<div className={'w-[80%] bg-gray-300 h-[1px] my-6'} />
			<StatsByUser />
		</div>
	);
};
