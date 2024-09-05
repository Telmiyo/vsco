import React from "react";

interface VSCOEditorProperties {
  message: string;
}

const VSCOEditor: React.FC<VSCOEditorProperties> = ({ message }: any) => {
  return <div>{message}</div>;
};

export default VSCOEditor;
