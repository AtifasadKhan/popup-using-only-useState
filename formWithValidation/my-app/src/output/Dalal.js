import Output from './Output';
const Dalal = (props) => {
  return (
    <div>
   
      {props.obj.map((data, index) => (
        <Output key={data.id} name={data.name} age={data.age} />
      ))}
    </div>
  );
};
export default Dalal;
