import MailInput from './MailInput';


const Home = () => {
    return (
      <div>
        <div class="logo-container">
          <h1 className="">MAILO</h1>
          <img src="/Mail.png" alt="Mail" class="mailo-icon" style={{ width: '30px', height: '30px' }} />
        </div>
        <MailInput />
        <br/>
      </div>
    );
  }
  
  export default Home;