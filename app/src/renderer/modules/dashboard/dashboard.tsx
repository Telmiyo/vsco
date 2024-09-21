import DashboardLayout from './layouts/DashboardLayout';
import './dashboard.css';
import useDragAndDrop from '../../hooks/useDragAndDrop';

function Dashboard() {
  const {
    isDragging,
    handleDrop,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
  } = useDragAndDrop({
    onDrop: (files: FileList) => {
      console.info('Files dropped:', files);
      // TODO: Send file using IPC and save into user library.
    },
  });
  return (
    <>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        className={`drop-zone w-screen h-screen absolute z-50 ${isDragging ? 'bg-white opacity-50' : 'bg-transparent'} transition-all duration-300 flex h-screen overflow-hidden`}
      />
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
