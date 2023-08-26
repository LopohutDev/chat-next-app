import { NextApiRequest, NextApiResponse } from "next";
import { Server } from "socket.io";
import http from "http";

function handler(req, res) {
    const server = res?.socket?.server;

    if (server.io) {
        const io = new Server(server);
        server.io = io;

        io.on("connection", (socket) => {
            socket.on("message", (message) => {
                io.emit("message", message);
            });
        });
    }

    res.end();
}

export { handler as GET, handler as POST, handler as PATCH };
