import React from 'react';
import Dropzone, { IMeta } from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';
export const App = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
        TEST
      <Dropzone
        onChangeStatus={({ meta, file }, status) =>
          console.log(meta, file, status)
        }
        styles={{
          dropzone: {
            overflow: 'auto',
            border: '1px solid #999',
            background: '#f5f5f5',
          },
          inputLabelWithFiles: { margin: '20px 3%' },
        }}
        accept="image/*,audio/*,video/*"
        canRemove={true}
        PreviewComponent={(props) => <Preview meta={props.meta} />}
      />
    </div>
  );
};

const Preview = ({ meta }: { meta: IMeta }) => {
  const { name, percent, status, previewUrl } = meta;
  return (
    <div className="preview-box">
      <img src={previewUrl} /> <span className="name">{name}</span> -{' '}
      <span className="status">{status}</span>
      {status !== 'done' && (
        <span className="percent"> ({Math.round(percent)}%)</span>
      )}
    </div>
  );
};
