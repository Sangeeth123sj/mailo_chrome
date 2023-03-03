
import {useState} from 'react'
// import './App.css';

  
const MailInput = () => {
    const [rawMail,setMail] = useState("")
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [copied, setCopied] = useState(false);


    const copyText = () => {
      navigator.clipboard.writeText(response);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };



    const handleSubmit = async(e) =>{
        e.preventDefault();
        const prompt = e.target.mail.value;
        console.log("prompt",prompt)
        setLoading(true);
        // sending request to the cohere API
        try {
            const res = await fetch('https://mailoapi.alltray.in/generate_mail', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ prompt })
            });
            const data = await res.json();
            console.log(data)
            setResponse(data.message);
            setMail(data.message);
            setLoading(false);
            setSuccess(true);
          } catch (error) {
            console.error(error);
            setLoading(false);
          }
      

    }

    

    return <div>
        <form onSubmit={handleSubmit}>
            <p>enter mail description to create your professional mail.</p>
            <br/>
            <textarea placeholder="example: Create a mail to the hr <name>,apply for leave from monday, 13th august,3 days, reason fever" rows="5" cols="30" onChange={(e) => setMail(e.target.value)} name="mail"></textarea>
            <br/> <br/>
            <div  className="livebox">
            {success && <button type='button' className="theme-button-small" onClick={copyText}>{copied ? "Copied!" : "Copy"}</button>}
            <p>{rawMail}</p>
            </div>
            <button className="theme-button"  disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                  Loading...
                </>
              ) : (
                "Submit"
              )}
            </button>
            {loading && <p>Creating the perfect email..</p>}
        </form>
    </div>
    }


export default MailInput;