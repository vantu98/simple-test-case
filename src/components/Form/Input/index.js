const Input = ({ type = "text", error, value }) => {
  return (
    <>
      <input type={type} value={value} />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </>
  );
};
