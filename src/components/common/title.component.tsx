/** @format */

interface props {
  title: string;
}
export const Title = (props: props) => {
  const { title } = props;
  return (
    <div>
      <h2 style={{ color: "#fff", marginTop: "10px" }}>{title}</h2>
    </div>
  );
};
