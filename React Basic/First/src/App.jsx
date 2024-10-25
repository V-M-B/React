function App() {
  return (
    <>
      <User name="webdev" age={12}
       isMarried={false} 
       hobbies={['coding','gym']}
       />
    </>
  );
}

const User = (props) => {//not destructed


  return( 
  <section>
    <h1>Name{props.name}</h1>
    <h2>Married Stauts:{props.isMarried}</h2>
    <h3>hobbies:{props.hobbies}</h3>
  </section>)
};

export default App;
