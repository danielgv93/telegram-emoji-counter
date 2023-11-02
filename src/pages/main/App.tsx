import React from 'react';
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';
import {useChatStore} from "../../domain/store/chatStore";
import {useNavigate} from "react-router-dom";
import {ChatModel} from "../../domain/models/statsModel";

function isChat(chat: any): chat is ChatModel {
    return (chat as ChatModel).messages !== undefined;
}
export const App = () => {
    const navigate = useNavigate();
    const { setChat } = useChatStore();

    const handleFile = ({file}: { file: File }) => {
        file.text().then(f => {
            const chatContent: ChatModel = JSON.parse(f);
            if (isChat(chatContent)) {
                setChat(chatContent);
                navigate("/stats")
                return;
            }
        })
    }

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Dropzone
        onChangeStatus={handleFile}
        styles={{
          dropzone: {
            overflow: 'auto',
            border: '1px solid #999',
            background: '#f5f5f5',
          },
          inputLabelWithFiles: { margin: '20px 3%' },
        }}
        accept=".json"
        canRemove={true}
      />
    </div>
  );
};

