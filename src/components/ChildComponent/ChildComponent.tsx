interface ChildComponentProps {
  name: string;
  lastName: string;
  lastName2?: string;
  age: number;
  clickReturnName: (fullName: string) => void;
}

const ChildComponent: React.FC<ChildComponentProps> = ({
  name,
  lastName,
  lastName2,
  age,
  clickReturnName,
}) => {
  const handleFullName = () => {
    console.log('ChildComponent, ', `${name} ${lastName} ${lastName2}`);
    clickReturnName(`${name} ${lastName} ${lastName2}`);
  };
  return (
    <div>
      <h3>
        ChildComponent, {name} {lastName} {age}
      </h3>
      <button
        onClick={() => {
          handleFullName();
        }}
      >
        Return full name
      </button>
    </div>
  );
};
export default ChildComponent;
