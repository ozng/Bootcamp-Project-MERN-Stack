import "./visitor.css";
import { changeHost } from "../../store/actions/reservation";
import { useDispatch } from "react-redux";

function Visitor({ item, name, label }) {
  const dispatch = useDispatch();

  return (
    <div className="visitor-container">
      <div className="visitor-visible">
        <p className="visitor-label">{label}</p>
        <div className="visitor-btn-container">
          <button
            disabled={item.value === 0}
            className="visitor-btn"
            onClick={() => dispatch(changeHost(name))}
          >
            -
          </button>
          <p className="visitor-label">{item?.value}</p>
          <button
            className="visitor-btn"
            onClick={() => dispatch(changeHost(name, "i"))}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Visitor;
