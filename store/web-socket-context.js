import React, { useState, useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';

const WebSocketContext = React.createContext({
  isPaused: false,
});

export const WebSocketContextProvider = (props) => {
    const [isPaused, setPause] = useState(false);
    const ws = useRef(null);
    const [cookies, setCookie, removeCookie] = useCookies([]);

    useEffect(() => {
        ws.current = new WebSocket(`ws://localhost:3000/cable?user_id=${cookies.user_id}`);
        ws.current.onopen = () => {
            console.log("ws opened");
            ws.current.send(JSON.stringify({"command": "subscribe","identifier":"{\"channel\":\"NotificationsChannel" + "\"}"}))
            
        }
        ws.current.onclose = () => console.log("ws closed");

        return () => {
            ws.current.close();
        };
    }, []);

    useEffect(() => {
        if (!ws.current) return;
        console.log(ws.current)
        

        ws.current.onmessage = e => {
            if (isPaused) return;
            const message = JSON.parse(e.data);
            console.log("e", message);
            console.log(`recipient is ${message?.message?.recipient_id}`)
            // console.log(message.message)
        };
    }, [isPaused]);

    return (
        <WebSocketContext.Provider
            value={{
            isPaused: isPaused
            }}
        >
            {props.children}
        </WebSocketContext.Provider>
        );
};

export default WebSocketContext;
