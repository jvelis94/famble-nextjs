import React, { useState, useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';
import dynamic from 'next/dynamic'



// const ActioncableNoSSR = dynamic(
//   () => import('actioncable').then((mod) => mod.ActionCable),
//   { ssr: false }
// )


const WebSocketContext = React.createContext({
  isPaused: false,
});

export const WebSocketContextProvider = (props) => {
    // const [notifications, setNotifications] = useState()
    // const [cookies, setCookie, removeCookie] = useCookies([]);
    // const [cable, setCable] = useState()
    // const [isPaused, setPause] = useState(false);
    
    
    // useEffect(() => {
    //     const ActionCable = require('actioncable');
    //     const cable = ActionCable.createConsumer(`ws://localhost:3000/cable?user_id=${cookies.user_id}`)
    //     cable.subscriptions.create(
    //         { channel: 'ApplicationCable::NotificationChannel' },
    //         { received: message => setNotifications(message) }
    //     )
    //     console.log(cable)
    // })

    
        

    // useEffect(() => {
    //     cable.subscriptions.create(
    //         { channel: 'NotificationsChannel' },
    //         { received: message => setNotifications(message) }
    //     )
    // })

    
    const [isPaused, setPause] = useState(false);
    const ws = useRef(null);
    const [cookies, setCookie, removeCookie] = useCookies([]);

    useEffect(() => {
        ws.current = new WebSocket(`ws://localhost:3000/cable?user_id=${cookies.user_id}`);
        ws.current.onopen = () => {
            console.log("ws opened");
            ws.current.send(JSON.stringify({"command": "subscribe","identifier":"{\"channel\":\"NotificationsChannel\"}"}))
            // ws.current.send(JSON.stringify({"command": "subscribe","identifier":"{\"channel\":\"notifications_channel\"}"}))
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
