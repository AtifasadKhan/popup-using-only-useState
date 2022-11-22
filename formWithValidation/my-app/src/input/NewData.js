import InputForm from './InputForm';

const NewData = (props) => {
  const retrieveDataFromForm = (data) => {
    const retievedData = {
      ...data,
    };
    // console.log(retievedData.name);

    // eslint-disable-next-line no-lone-blocks
    {
      props.retrieve(retievedData);
    }
  };
  return (
    <div>
      <InputForm retrieve={retrieveDataFromForm} />

    </div>
  );
};

export default NewData;
