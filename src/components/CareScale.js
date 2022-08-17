import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'


const prop= {
    1: 'peu',
    2: 'modérément',
    3: 'beaucoup'
}
function CareScale({careType, scaleValue}){
    const tab = [1, 2, 3]
    const scaleType= careType === 'water' ? (
        <img src={Water} alt='water-icon' />
    ) : (
			<img src={Sun} alt='sun-icon' />
		)
    /*const temps= careType === 'water' ? "d'humidité" : "de lumière"
        if (scaleValue === 1) {
            prop= "peu"
        } else if (scaleValue === 2){
            prop= "modérément"
        } else {
            prop= "beaucoup"
        }*/
    return (
        <div onClick={()=> alert(`Cette plante requiert ${prop[scaleValue]} ${careType === 'water' ? 'd\'arrosage' : 'de lumière'}`)}>
            {tab.map((tabEl)=>scaleValue >= tabEl ? <span key= {tabEl.toString()}>{scaleType}</span> : null)}
        </div>
    );
}

export default CareScale;
