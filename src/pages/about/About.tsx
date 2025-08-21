import ZekaExample from '../../components/ZekaExample/zekaExample'

function About() {
  const onZekaClick = () => {
    console.log('ZekaExample on about page clicked');}

    return (
      <div>
        <h1>About Us</h1>
        <ZekaExample 
          title="test2"
          
          onZekaClick={onZekaClick}
        />
      </div>
    );
  }
  
  export default About;