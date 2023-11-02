import {useEffect, useState} from "react";
import {StatsModel} from "../models/statsModel";
import {Api} from "../core/constants";
import {useChatStore} from "../store/chatStore";
import {useNavigate} from "react-router-dom";

export const useChat = (month: string): StatsModel | undefined => {
    const { chat } = useChatStore();
    const [stats, setStats] = useState<StatsModel>();

    useEffect(() => {
        if (!chat) {
            return
        }
        fetch(`${Api.baseUrl}/chat`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat,
                emoji: "💩",
                options: {
                    month
                }
            })
        })
            .then((r) => r.json())
            .then((r: StatsModel) => setStats(r))
    }, [month, chat])

    return stats
}

export const useChatRedirect = () => {
    const navigate = useNavigate();
    const { chat } = useChatStore();
    useEffect(() => {
        if (!chat) {
            navigate("/")
        }
    }, [chat])
}