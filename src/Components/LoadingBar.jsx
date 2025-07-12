const LoadingBar = ({ progress }) => {
  return (
    <div style={{ height: '4px', background: '#eee', width: '100%' }}>
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          background: '#007bff',
          transition: 'width 0.3s ease-in-out',
        }}
      ></div>
    </div>
  );
};

export default LoadingBar