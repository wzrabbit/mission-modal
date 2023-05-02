import styles from './MissionModal.module.css';
const MissionModal = ({
  children
}) => /*#__PURE__*/React.createElement("div", {
  className: styles.modal
}, /*#__PURE__*/React.createElement("p", {
  className: styles.content
}, children));
export default MissionModal;