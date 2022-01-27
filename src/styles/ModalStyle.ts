import theme from "~/lib/theme";

export const modalStyles: ReactModal.Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "75%",
    borderRadius: "12px",
    transform: "translate(-50%, -50%)",
    backgroundColor: theme.color.shark,
    borderWidth: 0,
    textAlign: "center",
    padding: "1.875rem 1rem 3rem",
  },
  overlay: {
    backgroundColor: "#000000AA",
  },
};
