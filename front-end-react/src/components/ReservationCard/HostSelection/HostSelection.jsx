import Visitor from "../../Visitor/Visitor";
import "./HostSelection.css";

function HostSelection({
  options,
  visible,
  handleChangeOption,
  handleVisible,
}) {
  return (
    <div className="host-selection-container">
      <p className="host-selection-label">Konuk Sayısı</p>
      <div className="host-selection-options-container" onClick={handleVisible}>
        <span className="host-selection-options">
          {options.cat.label + "/"}
          {options.cat.value + " - "}
          {options.dog.label + "/"}
          {options.dog.value}
        </span>
      </div>
      <div
        className={
          visible
            ? "host-selection-visitor-container host-selection-visible"
            : "host-selection-visitor-container"
        }
      >
        <Visitor
          item={options.cat}
          name="cat"
          handleChangeOption={handleChangeOption}
        />
        <Visitor
          item={options.dog}
          name="dog"
          handleChangeOption={handleChangeOption}
        />
      </div>
    </div>
  );
}

export default HostSelection;
