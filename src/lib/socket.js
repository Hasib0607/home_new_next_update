import io from "socket.io-client";

// const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL, {
//     reconnectionDelay: 1000,
//     reconnection: true,
//     reconnectionAttempts: 10,
//     transports: ["websocket"],
//     agent: false,
//     upgrade: false,
//     rejectUnauthorized: false,
// });

const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL, {
    reconnectionDelay: 1000,
    reconnection: true,
    reconnectionAttempts: 10, 
    transports: ["websocket"],
});

export default socket;