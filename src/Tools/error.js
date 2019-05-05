export const getErrorDescription = code => {
    switch (code) {
        case 1000:
            return "Socket normal closure.";
        case 1001:
            return "Server going down.";
        case 1002:
            return "Protocol error.";
        case 1003:
            return "Received not accept data type.";
        case 1004:
            return "Reserved.";
        case 1005:
            return "No status code was present.";
        case 1006:
            return "Connection closed abnormally.";
        case 1007:
            return "Received data within a message that was not consistent with the type of the message.";
        case 1008:
            return "Received a message that \"violates its policy\".";
        case 1009:
            return "Received a message that is too big for it to process.";
        case 1010:
            return "Terminating the connection - expected the server to negotiate one or more extension.";
        case 1011:
            return "Encountered an unexpected condition.";
        case 1015:
            return "Failure to perform a TLS handshake.";
        default:
            return "Unknown reason";
    }
}