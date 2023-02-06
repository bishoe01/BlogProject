import React, { useState, useEffect } from 'react';
import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);
function Home(props) {
    const [message, setMessage] = useState('');
    const [messageList, setMessageList] = useState([]);
    const [response, setResponse] = useState([
        '안녕하세요',
        '안녕하세요',
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        messageList.push(message);
        setMessage('');
    }
    useEffect(() => {
        const getResponse = async () => {
            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: '안녕하세요',
                temperature: 0.7,
                max_tokens: 256,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            });
            setResponse(...response, response.data.choices[0].text);
        };
        getResponse();
    }, []);
    return (
        <div>
            <section className='bg-secondary border-accent border-2 p-4 h-96 overflow-y-scroll rounded-md'>
                {messageList.map((message, index) => {
                    return (
                        <div key={index} className='flex justify-end'>
                            <div className='flex flex-col items-end'>
                                <div className='bg-accent text-white p-2 m-1 rounded-md'>
                                    <p>{message}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
                )}
                {response && 
                response.map((response, index) => {
                    console.log(response)
                    // return (
                        // <div key={index} className='flex justify-start'>
                        //     <div className='flex flex-col items-start'>
                        //         <div className='bg-primary text-white p-2 m-1 rounded-md'>
                        //             <p>{response.text}</p>
                        //         </div>
                        //     </div>
                        // </div>
                    // )
                }
                )}
            </section>
            <form className='w-full flex' onSubmit={handleSubmit}>
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='메세지를 입력해주세요' className='p-2 my-2 border-2 border-secondary rounded-md basis-10/12' />
                <button className='bg-accent text-white p-2 my-2 border-2 border-secondary rounded-md basis-2/12'>Submit</button>

            </form>
            <div>

            </div>

        </div>
    );
}

export default Home;