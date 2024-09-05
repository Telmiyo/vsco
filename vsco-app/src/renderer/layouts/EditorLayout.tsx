import VSCOEditor from 'vsco-editor';

function EditorLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <VSCOEditor message="VSCO Editor rendering..." />
    </div>
  );
}

export default EditorLayout;
