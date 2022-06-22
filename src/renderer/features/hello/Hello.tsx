import icon from '../../../../assets/icon.svg';

export const Hello = () => {
  const startLoading = () => {
    console.log('123123123123');
  };

  return (
    <div className="h-screen flex justify-center">
      <div className="flex flex-col justify-center items-center mx-auto">
        <div className="Hello">
          <img width="200px" alt="icon" src={icon} />
        </div>
      </div>
    </div>
  );
};
