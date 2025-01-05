const CodeExample = ({ code }) => (
  <pre
    style={{
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderRadius: '5px',
      overflowX: 'auto',
    }}
  >
    <code>{code}</code>
  </pre>
);

export default CodeExample;
