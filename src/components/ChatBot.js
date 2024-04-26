//App.js

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Avatar from '../avatar.png'; // Correct import statement for Avatar

const steps = [
    {
        id: '0',
        message: 'Hey Geek!',
        trigger: '1',
    }, {
        id: '1',
        message: 'Please write your username',
        trigger: '2'
    }, {
        id: '2',
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: `Hi {previousValue}, how can I help you?`, // Correct usage of variable in message
        trigger: '4' // Correct trigger value as string
    }, {
        id: '4',
        options: [
            { value: 1, label: 'Adopt a pet', trigger: '5'},
            { value: 2, label: 'Queries', trigger: '6'}
        ],
    }, {
        id: '5',
        message: "Open https://localhost:3000/adopt",
        end: true
    }, {
        id: '6',
        message: "Your query is important to us. Please contact support at support@example.com.",
        end: true
    }
];

const theme = {
    background: 'rgba(217, 189, 128, 0.5)',
    headerBgColor: '#197B22',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
};

const config = {
    botAvatar: Avatar, // Assign Avatar directly if it's an image
    floating: true,
};

function Chat() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <ChatBot
                    headerTitle="Help Desk"
                    steps={steps}
                    {...config}
                />
            </ThemeProvider>
        </div>
    );
}

export default Chat;
