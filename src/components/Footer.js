import { useState } from 'react'
import '../styles/Footer.css'


function Footer() {
    const [input, setInput] = useState('')

    function handleBlur(){
        if (!input.includes('@')){
            alert('Mail incorrect')
        }
    }
    return (
        <footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
        <input type="text" name="" placeholder="Votre mail" value={input} onChange={(e)=> setInput(e.target.value)} onBlur={handleBlur}/>
        </footer>
    )
}

export default Footer;
