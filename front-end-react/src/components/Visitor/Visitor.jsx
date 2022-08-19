import "./visitor.css";

function Visitor({ item, handleChangeOption, name }) {
  return (
    <div className="visitor-container">
      <div className="visitor-visible">
        <p className="visitor-label">{item?.label}</p>
        <div className="visitor-btn-container">
          <button
            disabled={item.value === 0}
            className="visitor-btn"
            onClick={() => handleChangeOption(name)}
          >
            -
          </button>
          <p className="visitor-label">{item?.value}</p>
          <button
            className="visitor-btn"
            onClick={() => handleChangeOption(name, "i")}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Visitor;
