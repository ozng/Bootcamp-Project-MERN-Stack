import { Modal } from "antd";
import FindReservation from "../FindReservation";

function FindReservationModal({
  setIsReservationDetailModalVisible,
  isReservationDetailModalVisible,
}) {
  const handleCancel = () => {
    setIsReservationDetailModalVisible(false);
  };
  return (
    <Modal
      footer={null}
      title="Rezervasyon Bul"
      visible={isReservationDetailModalVisible}
      onCancel={handleCancel}
    >
      <FindReservation />
    </Modal>
  );
}

export default FindReservationModal;
