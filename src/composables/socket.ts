import { ref, onMounted } from "vue"


export interface Root {
    status: string
    file: string
}


export const useWebsocket = () => {
    const socket = new WebSocket("wss://beam-1.onrender.com:443/ws");
    const data = ref<Root>({
        status: "offline",
        file: ""
    })

    socket.onmessage = (event) => {
        data.value = JSON.parse(event.data);
    }
    return {
        socket,
        data
    }
}