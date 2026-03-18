import { ref, onMounted, onUnmounted } from "vue"

export interface Root {
    status: string
    file: string
}

const data = ref<Root>({
    status: "offline",
    file: ""
})

let socket: WebSocket | null = null;

export const useSocket = () => {

    const connect = () => {
        if (socket && (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CONNECTING)) {
            return;
        }

        socket = new WebSocket("wss://beam-1.onrender.com:443/ws");



        socket.onmessage = (event) => {
            try {
                const parsed = JSON.parse(event.data);
                if (parsed.status) {
                    data.value = parsed;
                }
            } catch (e) {
                console.error("Error parsing WS data", e);
            }
        };

        socket.onclose = () => {
            data.value.status = "offline";
            setTimeout(connect, 5000);
        };
    }

    onMounted(() => {
        connect();
    })
    onUnmounted(() => {
        if (socket) {
            console.log("Clear...");
            socket.close();
            socket = null;
        }
    });

    return {
        data
    }
}
