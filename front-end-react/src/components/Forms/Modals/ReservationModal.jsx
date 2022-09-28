import { Modal } from "antd";
import Reservation from "../Reservation";

function ReservationModal({
  setReservationModalVisible,
  isReservationModalVisible,
}) {
  const handleCancel = () => {
    setReservationModalVisible(false);
  };
  return (
    <Modal
      footer={null}
      title="Rezervasyon"
      visible={isReservationModalVisible}
      onCancel={handleCancel}
    >
      <Reservation />
    </Modal>
  );
}

export default ReservationModal;
